const GoodsList = require('../../requestToDB/models/goodsListModel')

async function keepModifiedGood(req, res) {
  try {
    const {
      id,
      textInput,
      numberInput,
      unitInput
    } = req.body

    // console.log('true?',
    //   Number.isFinite(id)
    //   && typeof textInput === "string"
    //   && Number.isFinite(numberInput)
    //   && (unitInput === 'kg' || unitInput === 'pcs' || unitInput === '')
    // )

    if (Number.isFinite(id)
      && typeof textInput === "string"
      && Number.isFinite(numberInput)
      && (unitInput === 'kg'
        || unitInput === 'pcs'
        || unitInput === '')) {

      const retuntWhat = await GoodsList.update({
        name_of_good: textInput,
        number_of_good: numberInput,
        unit_of_good: unitInput,
      },
        {
          where: { id }
        })

      if (retuntWhat.includes(0)) {
        res.json({
          status: 500,
          massage: 'Goods is not found'
        })
        return
      }

      res.json({
        status: 200,
        massage: 'Goods is keeped'
      })
      return
    }

    res.json({
      status: 400,
      massage: 'Goods is NOT keeped, data is not valid'
    })
    return

  } catch (err) {
    res.json({
      status: 500,
      massage: `Goods is NOT keeped, ${err}`
    })
    console.log('[err]:', err)
  }
}

module.exports = keepModifiedGood
