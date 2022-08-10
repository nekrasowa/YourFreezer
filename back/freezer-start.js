const express = require('express')
const cors = require('cors')
const goods = require('./goods')

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

  const deletedElemIndex = goods.goods.findIndex((elem) => elem.info.id === req.id)
  goods.goods.slice(deletedElemIndex, 1)

  res.json({ isOk: true })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
