const express = require('express')
const router = express.Router()
const createNewUser = require('../controlers/postCreateNewUser')
const enterToSystem = require('../controlers/getEnterToSystem')

router.post('/createNewUser', createNewUser)
router.post('/enterToSystem', enterToSystem)

module.exports = router
