const router = require('express').Router()
const userRoute = require('./userRoute')
const eventOrganizerRoute = require('./eventOrganizerRoute')
const eventRoute = require('./eventRoute')
const checkoutRoute = require('./checkoutRoute')
const { errHandler } = require('./../middleware/errorHandler')

router.get('/', (req, res) => res.status(200).send('ok'))
router.use('/user', userRoute)
router.use('/event', eventRoute)
router.use('/event-organizer', eventOrganizerRoute)
router.use('/checkout', checkoutRoute)

router.use(errHandler)

module.exports = router
