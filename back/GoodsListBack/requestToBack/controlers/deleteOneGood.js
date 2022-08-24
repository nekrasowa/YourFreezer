const GoodsList = require('../../requestToDB/models/goodsListModel')

async function deleteOneGood(req, res) {
  try {
    const deletedElemIndex = GoodsList.destroy({
      where: {
        id: req.body.id
      }
    })

    if (deletedElemIndex === -1) {
      res.json({
        isOk: false,
        massage: 'Goods is NOT deleted'
      })
    }

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
}

module.exports = deleteOneGood
