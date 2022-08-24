// const { goods } = require('../../goods')
const Goods_list_new = require('../../requestToDB/models/goodsListModel')

async function getAllGoods(req, res) {
  console.log('in controler 1')
  await Goods_list_new.sync()

  await res.json()
}

module.exports = getAllGoods
