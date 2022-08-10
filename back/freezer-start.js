const express = require('express')
const cors = require('cors')
const goods = require('./goods')

const app = express()
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/goods/all', (req, res) => {
  console.log('[goods]', goods)

  res.json(goods)
})

app.delete('/goods/deleteOne', (req, res) => {
  'some code'

  res.json({isOk: true})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})