const express = require('express')
const router = express.Router()
const createNewUser = require('../controlers/postCreateNewUser')

router.post('/createNewUser', createNewUser)

module.exports = router
