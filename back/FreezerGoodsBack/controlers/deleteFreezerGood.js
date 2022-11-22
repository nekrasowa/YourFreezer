const freezerGoods = require('../../requestToDB/models/freezerGoodsModel')

async function deleteFreezerGood(req, res) {
  try {
    const id = req.body.id

    if (Number.isFinite(id)) {
      const deletedElem = await freezerGoods.destroy({
        where: { id }
      })
      if (deletedElem === 0) {
        res.status(500).json({
          isOk: false,
          message: 'Goods is NOT deleted'
        })
        return
      }

      res.status(200).json({
        isOk: true,
        message: 'Goods is deleted'
      })
      return
    }

    res.status(400).json({
      isOk: false,
      message: 'ID should be a number'
    })
  } catch (err) {
    res.status(500).json({
      isOk: false,
      message: `Goods is NOT deleted!`,
      data: err
    })
  }
}

module.exports = deleteFreezerGood
