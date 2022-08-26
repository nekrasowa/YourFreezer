const GoodsList = require('../../requestToDB/models/goodsListModel')
const bringToCorrectForm = require('../../../helpFunc.js/bringToCorrectForm')

async function createGood(req, res) {
  try {
    const {
      textGood,
      numberGood,
      unitGood
    } = req.body
    console.log('req.body', req.body)

    const newGoodInDB = await GoodsList.create({
      name_of_good: textGood,
      number_of_good: numberGood || null,
      unit_of_good: unitGood,
    })

    const newGood = bringToCorrectForm(newGoodInDB)

    res.json({
      isOk: true,
      massage: 'Goods is added'
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = createGood
