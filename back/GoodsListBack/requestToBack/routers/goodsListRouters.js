const express = require('express')
const router = express.Router()
const { goods } = require('../../goods')
const getAllGoods = require('../controlers/getAllGoods')
const createGood = require('../controlers/postCreateGood')
const keepModifiedGood = require('../controlers/putKeepModifiedGood')

router.get('/allGoods', getAllGoods)

router.post('/createGood', createGood)

router.put('/keepModifiedGood', (req, res) => {
  try {
    const {
      id,
      textInput,
      numberInput,
      unitInput
    } = req.body
    console.log('[id]:', id)

    const modifyElem = goods.find((elem) => elem.info.id === id)
    if (
      !modifyElem ||
      typeof modifyElem !== 'object'
    ) {
      res.json({
        isOk: false,
        massage: 'Goods is NOT keeped'
      })
    }
    modifyElem.info.textGood = textInput
    modifyElem.info.numberGood = numberInput
    modifyElem.info.unitGood = unitInput

    console.log('[goods]:', goods)

    res.json({
      isOk: true,
      massage: 'Goods is keeped'
    })

  } catch (err) {
    console.log('[err]:', err)
  }
})

router.put('/checkedGood', (req, res) => {
  try {
    const checkedElemIndex = goods.findIndex((elem) => elem.info.id === req.body.id)
    const checkedElem = goods[checkedElemIndex]

    if (
      !checkedElem ||
      typeof checkedElem !== 'object' ||
      checkedElemIndex === -1
    ) {
      res.json({
        isOk: false,
        massage: 'Goods is NOT checked'
      })
    }

    checkedElem.states.isChecked = !checkedElem.states.isChecked

    res.json({
      isOk: true,
      massage: 'Goods is checked'
    })
  }
  catch (err) {
    res.json({
      isOk: false,
      massage: `Goods is NOT checked! ${err.massage}`
    })
  }
})

router.delete('/deleteOne', (req, res) => {
  try {
    const deletedElemIndex = goods.findIndex((elem) => elem.info.id === req.body.id)

    if (deletedElemIndex === -1) {
      res.json({
        isOk: false,
        massage: 'Goods is NOT deleted'
      })
    }

    goods.splice(deletedElemIndex, 1)

    res.json({
      isOk: true,
      massage: 'Goods is deleted'
    })
  } catch (err) {
    res.json({
      isOk: false,
      massage: `Goods is NOT deleted!`
    })
  }
})

module.exports = router




