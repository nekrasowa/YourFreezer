const express = require('express')
const router = express.Router()
const allFreezerGoods = require('../controlers/getAllFreezerGoods')
const createFreezerGood = require('../controlers/postCreateFreezerGood')
const keepModifiedFreezerGood = require('../controlers/putKeepModifiedFreezerGood')
const deleteFreezerGood = require('../controlers/deleteFreezerGood')

router.get('/allFreezerGoods', allFreezerGoods)

router.post('/createFreezerGood', createFreezerGood)

router.put('/keepModifiedFreezerGood', keepModifiedFreezerGood)

router.delete('/deleteFreezerGood', deleteFreezerGood)

module.exports = router
