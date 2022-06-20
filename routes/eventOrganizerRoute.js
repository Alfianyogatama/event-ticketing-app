const router = require('express').Router()
const Controller = require('./../controllers/eventOrganizerController')

router.get('/', (req, res) => res.send('EO'))
router.post('/register', Controller.register)
router.post('/login', Controller.login)

module.exports = router

