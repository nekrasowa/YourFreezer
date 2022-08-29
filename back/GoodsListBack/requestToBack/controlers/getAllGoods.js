const GoodsList = require('../../requestToDB/models/goodsListModel')
const bringToCorrectForm = require('../../../helpFunc.js/bringToCorrectForm')

async function getAllGoods(req, res) {
  // await GoodsList.sync({ alter: true })
  try {
    const goodsFromDB = await GoodsList.findAll()
    const goods = goodsFromDB.map(bringToCorrectForm)
// throw {name: 'my', massage: 'non'}
    await res.json(goods)
  } catch (err) {

    console.log(`${err.name}, ${err.massage}`)
    const massage = 'Error on server, try again leter!'
    res
      .status(500).send({ massage: massage })
  }
}

module.exports = getAllGoods
