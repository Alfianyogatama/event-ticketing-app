const router = require('express').Router()
const userRoute = require('./userRoute')
const eventOrganizerRoute = require('./eventOrganizerRoute')
const eventRoute = require('./eventRoute')
const checkoutRoute = require('./checkoutRoute')

router.get('/', (req, res) => res.send('ok'))
router.use('/user', userRoute)
router.use('/event', eventRoute)
router.use('/event-organizer', eventOrganizerRoute)
router.use('/event-organizer', eventOrganizerRoute)
router.use('/checkout', checkoutRoute)

module.exports = router