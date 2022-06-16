const router = require('express').Router()
const controller = require('./../controllers/userController')
const { errHandler } = require('./../middleware/errorHandler')

router.post('/register', controller.register)
router.use(errHandler)

module.exports = router

