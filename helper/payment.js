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
    const invoice = await this.XenditInvoice.createInvoice({
      externalID: `INVOICE_PAYMENT_${transactionId}`,
      payerEmail: userEmail,
      description: `Payment ticket ${eventName}`,
      amount: ammounts,
      shouldSendEmail: true,
    })
    return invoice
  } catch (err) {
    throw err
  }
}

exports.XenditInvoice = new Invoice(invoiceSpecificOptions)
