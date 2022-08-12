const express = require('express')
const cors = require('cors')
const uniqid = require('uniqid')

const { goods } = require('./goods')
// const lang = require('lodash/fp/lang')


const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/goods/all', (req, res) => {
  res.json(goods)
})

app.post('/goods/createGood', (req, res) => {
  try {
    const id = uniqid()
    const {
      textGood,
      numberGood,
      unitGood
    } = req.body

    const newGood = {
      info: {
        textGood,
        numberGood,
        unitGood,
        id,
      },
      states: {
        isChecked: false,
        fieldShow: 'ReadBlock'
      }
    }
    console.log('[newGood]:', newGood)

    goods.push(newGood)
    console.log('[goods]:', goods.length)

    res.json({
      isOk: true,
      massage: 'Goods is added'
    })
  } catch (err) {

  }
})
app.put('/goods/keepModifiedGood', (req, res) => {
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

app.put('/goods/checkedGood', (req, res) => {
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

app.delete('/goods/deleteOne', (req, res) => {
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
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
