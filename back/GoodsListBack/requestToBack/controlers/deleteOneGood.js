const { goods } = require('../../goods')

async function deleteOneGood(req, res) {
  try {
    const deletedElemIndex = goods.findIndex((elem) => elem.info.id === req.body.id)

    if (deletedElemIndex === -1) {
      res.json({
        isOk: false,
        massage: 'Goods is NOT deleted'
      })
    }

    goods.splice(deletedElemIndex, 1)

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
