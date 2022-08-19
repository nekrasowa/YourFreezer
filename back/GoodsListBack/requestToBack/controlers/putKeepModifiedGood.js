const { goods } = require('../../goods')

async function keepModifiedGood(req, res) {
  try {
    const {
      id,
      textInput,
      numberInput,
      unitInput
    } = req.body
    console.log('[id]:', id)

    const modifyElem = goods.find((elem) => elem.info.id === id)
    if (
      !modifyElem ||
      typeof modifyElem !== 'object'
    ) {
      res.json({
        isOk: false,
        massage: 'Goods is NOT keeped'
      })
    }
    modifyElem.info.textGood = textInput
    modifyElem.info.numberGood = numberInput
    modifyElem.info.unitGood = unitInput

    console.log('[goods]:', goods)

    res.json({
      isOk: true,
      massage: 'Goods is keeped'
    })

  } catch (err) {
    console.log('[err]:', err)
  }
}

module.exports = keepModifiedGood
