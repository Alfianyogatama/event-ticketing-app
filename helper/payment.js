const Xendit = require('xendit-node')
const x = new Xendit({
  secretKey: process.env.SK_PAYMENT,
})
const { Invoice, Disbursement, Payout } = x
const invoiceSpecificOptions = {}

exports.createInvoice = async (
  transactionId,
  userEmail,
  eventName,
  ammounts
) => {
  try {
    console.log({ transactionId, userEmail, eventName, ammounts })
    const invoice = await this.XenditInvoice.createInvoice({
      externalID: `INVOICE_PAYMENT_${transactionId}`,
      payerEmail: userEmail,
      description: `Payment ticket ${eventName}`,
      amount: ammounts,
      shouldSendEmail: true,
    })
    return invoice
  } catch (err) {
    console.error(err)
  }
}

exports.XenditInvoice = new Invoice(invoiceSpecificOptions)
