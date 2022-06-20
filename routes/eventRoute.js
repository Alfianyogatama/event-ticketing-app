const router = require('express').Router()
const controller = require('./../controllers/eventController')
const {
  authentication,
  organizerAuthentication,
  organizerAuthorization,
  userRoleAuth
} = require('./../middleware/auth')

router.get('/', (req, res) => res.send('event'))

// router need authentication / login
// router.use(authentication)
router.get('/list', controller.getAllEvents)
router.get('/find/:eventId', controller.findById)

router.post('/create', organizerAuthentication, controller.createEvent)
router.patch(
  '/status-update/:eventId',
  organizerAuthentication,
  organizerAuthorization,
  controller.updateEvent
)

module.exports = router

