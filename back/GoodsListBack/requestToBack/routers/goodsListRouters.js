const express = require('express')
const router = express.Router()
const getAllGoods = require('../controlers/getAllGoods')
const createGood = require('../controlers/postCreateGood')
const keepModifiedGood = require('../controlers/putKeepModifiedGood')
const deleteOneGood = require('../controlers/deleteOneGood')
const checkedGood = require('../controlers/putCheckedGood')

router.get('/allGoods', getAllGoods)

router.post('/createGood', createGood)

router.put('/keepModifiedGood', keepModifiedGood)

router.put('/checkedGood', checkedGood)

router.delete('/deleteOne', deleteOneGood)

module.exports = router
