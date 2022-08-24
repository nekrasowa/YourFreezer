const GoodsList = require('../../requestToDB/models/goodsListModel')

async function keepModifiedGood(req, res) {
  try {
    const {
      id,
      textInput,
      numberInput,
      unitInput
    } = req.body

    const retuntWhat = await GoodsList.update({
      name_of_good: textInput,
      number_of_good: numberInput,
      unit_of_good: unitInput,
    },
      {
        where: { id }
      })


    if (retuntWhat === 1) {
      res.json({
        isOk: false,
        massage: 'Goods is NOT checked'
      })
    }
    console.log('[retuntWhat]:', retuntWhat)

    res.json({
      isOk: true,
      massage: 'Goods is keeped'
    })

  } catch (err) {
    console.log('[err]:', err)
  }
}

module.exports = keepModifiedGood
