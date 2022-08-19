const { goods } = require('../../goods')

async function checkedGood(req, res) {
  try {
    const checkedElemIndex = goods.findIndex((elem) => elem.info.id === req.body.id)
    const checkedElem = goods[checkedElemIndex]

    if (
      !checkedElem ||
      typeof checkedElem !== 'object' ||
      checkedElemIndex === -1
    ) {
      res.json({
        isOk: false,
        massage: 'Goods is NOT checked'
      })
    }

    checkedElem.states.isChecked = !checkedElem.states.isChecked

    res.json({
      isOk: true,
      massage: 'Goods is checked'
    })
  }
  catch (err) {
    res.json({
      isOk: false,
      massage: `Goods is NOT checked! ${err.massage}`
    })
  }
}

module.exports = checkedGood
