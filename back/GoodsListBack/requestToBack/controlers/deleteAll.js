const GoodsList = require('../../../requestToDB/models/goodsListModel')

async function deleteAllGoods(req, res) {
  try {
    const user_id = req.id
    if (Number.isFinite(user_id)) {
      const deletedElem = await GoodsList.destroy({
        where: { user_id }
      })
      if (deletedElem === 0) {
        res.json({
          isOk: false,
          message: 'Goods is NOT deleted'
        })
        return
      }

      res.json({
        isOk: true,
        message: 'Goods is deleted'
      })
      return
    }

    res.json({
      isOk: false,
      message: 'ID should be a number'
    })
  } catch (err) {
    res.json({
      isOk: false,
      message: `Goods is NOT deleted!`,
      data: err
    })
  }
}

module.exports = deleteAllGoods
