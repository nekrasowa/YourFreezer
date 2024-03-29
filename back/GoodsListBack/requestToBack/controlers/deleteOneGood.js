const GoodsList = require('../../../requestToDB/models/goodsListModel')

async function deleteOneGood(req, res) {
  try {
    const id = req.body.id
    if (Number.isFinite(id)) {
      const deletedElem = await GoodsList.destroy({
        where: { id }
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

module.exports = deleteOneGood
