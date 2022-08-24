const GoodsList = require('../../requestToDB/models/goodsListModel')
const bringToCorrectForm = require('../../../helpFunc.js/bringToCorrectForm')

async function getAllGoods(req, res) {
  console.log('in controler 1')
  // await GoodsList.sync({ alter: true })
  const goodsFromDB = await GoodsList.findAll()
  const goods = goodsFromDB.map(bringToCorrectForm)

  await res.json(goods)
}

module.exports = getAllGoods
