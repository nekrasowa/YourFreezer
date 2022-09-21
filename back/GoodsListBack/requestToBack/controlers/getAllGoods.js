const GoodsList = require('../../../requestToDB/models/goodsListModel')
const bringToCorrectForm = require('../../../helpFunc/bringToCorrectForm')

async function getAllGoods(req, res) {
  try {
    const userId = req.id
    const goodsFromDB = await GoodsList
      .findAll({ where: { user_id: userId } })
    const goods = goodsFromDB.map(bringToCorrectForm)

    await res.json(goods)
  } catch (err) {

    console.log(`${err.name}, ${err.massage}`)
    const massage = 'Error on server, try again leter!'
    res
      .status(500).send({ massage: massage })
  }
}

module.exports = getAllGoods
