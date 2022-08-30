const GoodsList = require('../../requestToDB/models/goodsListModel')

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
          massage: 'Goods is NOT deleted'
        })
        return
      }

      res.json({
        isOk: true,
        massage: 'Goods is deleted'
      })
      return
    }

    res.json({
      isOk: false,
      massage: 'ID should be a number'
    })
  } catch (err) {
    res.json({
      isOk: false,
      massage: `Goods is NOT deleted!`,
      data: err
    })
  }
}

module.exports = deleteOneGood
