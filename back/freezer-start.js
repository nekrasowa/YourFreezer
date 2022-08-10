const express = require('express')
const cors = require('cors')
const { goods } = require('./goods')

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

app.delete('/goods/deleteOne', (req, res) => {
  const goodsLenghtBefore = goods.length

  const deletedElemIndex = goods.findIndex((elem) => elem.info.id === req.id)
  const newGoods = goods.slice(deletedElemIndex, 1)

  const goodsLenghtAfter = newGoods.length

  console.log(goodsLenghtBefore, goodsLenghtAfter)
  console.log('[goods]', newGoods)

  if (goodsLenghtBefore > goodsLenghtAfter) {
    res.json({
      isOk: true,
      massage: 'Goods is deleted'
    })
    return
  }
  res.json({
    isOk: false,
    massage: 'Goods is NOT deleted'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
