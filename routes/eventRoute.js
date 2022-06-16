const router = require('express').Router()

router.get('/', (req, res) => res.send('event'))

module.exports = router