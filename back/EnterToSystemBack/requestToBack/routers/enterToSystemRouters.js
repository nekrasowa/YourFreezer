const express = require('express')
const router = express.Router()
const enterToSystem = require('../controlers/postEnterToSystem')

router.post('/enterToSystem', enterToSystem)

module.exports = router
