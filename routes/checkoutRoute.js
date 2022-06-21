const router = require('express').Router()
const controller = require('./../controllers/checkoutController')
const {
  authentication,
  userAuthorization,
} = require('./../middleware/auth')

router.post('/notify-payment', controller.notifyPayment)
router.use(authentication)
router.post('/event/:eventId', controller.createCheckout)
router.get('/list', controller.getListTransaction)

module.exports = router
