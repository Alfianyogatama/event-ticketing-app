const {
  Event,
  fullfiledQuota: Quota,
  User,
  transaction: Transaction,
} = require('./../models')

const { sequelize } = require('./../models')

const { checkQuota } = require('./../helper/chekQuota')
const { createInvoice } = require('./../helper/payment')

class Controller {
  static async createCheckout(req, res, next) {
    // sequelize transaction
    let transaction
    try {
      transaction = await sequelize.transaction()
      const { eventId } = req.params
      const { id: userId } = req.user
      const payload = { ...req.body }

      const event = await Event.findByPk(
        eventId,
        {
          include: [Quota],
        },
        { transaction }
      )
      if (!event) throw { message: 'Event not found' }

      let ammounts = 0
      for (const key in payload) {
        const quotaSelected = `${key}Quotas`
        const priceSelected = `${key}Price`
        if (event[quotaSelected] === 0 && payload[key] > 0)
          throw { message: `Tiket ${key} tidak tersedia` }

        const isQuotaAvailable = checkQuota(
          event[quotaSelected],
          event.fullfiledQuotum[quotaSelected],
          payload[key]
        )
        if (!isQuotaAvailable)
          throw { message: `No available seat for ${payload[key]}` }

        const totalPrice = event[priceSelected] * payload[key]
        ammounts += totalPrice
      }

      if (event.status !== 'published')
        throw { message: 'Event is not published' }

      const data = {
        ...payload,
        userId,
        eventId,
        nominal: ammounts,
        paymentStatus: 'pending',
      }

      const getTransaction = await Transaction.create(
        data,
        {
          ...payload,
        },
        { transaction }
      )

      const quota = await Quota.findOne({
        where: { event_id: data.eventId },
      })

      const payloadUpdate = {
        gold: quota.gold + payload.gold,
        platinum: quota.platinum + payload.platinum,
        silver: quota.silver + payload.silver,
      }

      await Quota.update(payloadUpdate, {
        where: {
          event_id: data.eventId,
        },
        transaction,
      })

      //payment process
      const invoice = await createInvoice(
        getTransaction.id,
        req.user.email,
        event.name,
        ammounts
      )

      res.status(201).json({
        success: true,
        message: `Succes checkout event : ${event.name}`,
        data: {
          id: getTransaction.id,
          ...payload,
          ammounts,
          checkoutUrl: invoice.invoice_url,
        },
      })
      await transaction.commit()
    } catch (err) {
      console.error(err)
      if (transaction) {
        await transaction.rollback()
      }
      next(err)
    }
  }

  static async notifyPayment(req, res, next) {
    try {
      console.log(req.body, '<<< response callback from xendit ')
      const { external_id, status } = req.body
      const idTransaction = external_id.replace('INVOICE_PAYMENT_', '')
      const transaction = await Transaction.findByPk(idTransaction)
      // const event = await Event.findByPk(transaction.eventId)
      const quota = await Quota.findOne({
        where: { event_id: transaction.eventId },
      })

      // jika pembayaran tidak dilakukan status transaksi berubah menjadi failed,
      // kuota event dikembalikan

      if (status !== 'PAID') {
        transaction.set({
          paymentStatus: 'failed',
        })

        quota.set({
          gold: quota.gold - transaction.gold,
          platinum: quota.platinum - transaction.platinum,
          silver: quota.silver - transaction.silver,
        })
      }

      transaction.set({
        paymentStatus: 'done',
      })

      await transaction.save()
      await quota.save()

      res.status(200).json({ message: 'Success update data transaction' })
    } catch (err) {
      console.error(err)
      next(err)
    }
  }

  static async getListTransaction(req, res, next) {
    try {
      const getTransactions = await Transaction.findAll()

      res.status(200).json({
        success: true,
        message: `Succes get all data transactions`,
        data: {
          ...getTransactions,
        },
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = Controller
