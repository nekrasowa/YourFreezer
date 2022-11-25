const freezerGoods = require('../../requestToDB/models/freezerGoodsModel')
const bringToCorrectFreezForm = require('../../helpFunc/bringToCorrectFreezForm')

async function allFreezerGoods(req, res) {
  try {
    const userId = req.id

    const goodsFromDB = await freezerGoods
      .findAll({ where: { user_id: userId } })
    const goods = goodsFromDB.map((el) => (bringToCorrectFreezForm(el)))

    await res.status(200).json(goods)
  } catch (err) {

    console.log(`${err.name}, ${err.message}`)
    const message = 'Error on server, try again leter!'
    res.status(500).send({ message: message })
  }
}

module.exports = allFreezerGoods
