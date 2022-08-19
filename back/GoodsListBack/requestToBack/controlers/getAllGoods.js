const { goods } = require('../../goods')

async function getAllGoods(req, res) {
   await res.json(goods)
}

module.exports = getAllGoods
