const router = require('express').Router()
const controller = require('./../controllers/eventController')
const {
  authentication,
  organizerAuthentication,
  organizerAuthorization,
  userRoleAuth,
} = require('./../middleware/auth')

router.get('/', (req, res) => res.send('event'))

// router need authentication / login
// router.use(authentication)
router.get('/list', controller.getAllEvents)
router.get('/find/:eventId', controller.findById)

router.use(organizerAuthentication)

router.post('/create', controller.createEvent)
router.get(
  '/list-participant/:eventId',
  organizerAuthorization,
  controller.getParticipants
)
router.patch(
  '/status-update/:eventId',
  organizerAuthorization,
  controller.updateEvent
)
router.patch(
  '/quota-update/:eventId',
  organizerAuthorization,
  controller.updateTicketClass
)

module.exports = router
