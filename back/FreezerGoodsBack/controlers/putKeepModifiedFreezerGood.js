const freezerGoods = require('../../requestToDB/models/freezerGoodsModel')

async function keepModifiedFreezerGood(req, res) {
  try {
    const {
      id,
      textInput,
      numberInput,
      unitInput,
      typeOfGood
    } = req.body

    if (Number.isFinite(id)
      && typeof textInput === "string"
      && (Number.isFinite(numberInput)|| null)
      && (unitInput === 'kg'
        || unitInput === 'pcs'
        || unitInput === '')) {

      const retuntWhat = await freezerGoods.update({
        name_of_good: textInput,
        number_of_good: numberInput,
        unit_of_good: unitInput,
        type_of_good: typeOfGood,
      },
        {
          where: { id }
        })

      if (retuntWhat.includes(0)) {
        res.status(500).json({
          message: 'Goods is not found'
        })
        return
      }

      res.status(200).json({
        message: 'Goods is keeped'
      })
      return
    }

    res.status(400).json({
      message: 'Goods is NOT keeped, data is not valid'
    })
    return

  } catch (err) {
    res.status(500).json({
      message: `Goods is NOT keeped, ${err}`
    })
    console.log('[err]:', err)
  }
}

module.exports = keepModifiedFreezerGood
