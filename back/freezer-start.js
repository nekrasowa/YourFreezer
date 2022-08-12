const express = require('express')
const cors = require('cors')
const { goods } = require('./goods')
const lang = require('lodash/fp/lang')

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
