const GoodsList = require('../../requestToDB/models/goodsListModel')

async function deleteOneGood(req, res) {
  try {
    const deletedElem = await GoodsList.destroy({
      where: {
        id: req.body.id
      }
    }) 
    console.log('[ deletedElem ]:', deletedElem)

    // const deletedElemIndex = -1
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
  } catch (err) {
    res.json({
      isOk: false,
      massage: `Goods is NOT deleted!`,
      data: err
    })
  }
}

module.exports = deleteOneGood
