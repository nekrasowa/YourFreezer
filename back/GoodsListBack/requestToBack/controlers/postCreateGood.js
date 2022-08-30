const GoodsList = require('../../requestToDB/models/goodsListModel')
// const bringToCorrectForm = require('../../../helpFunc.js/bringToCorrectForm')

async function createGood(req, res) {
  try {
    const {
      textGood: textInput,
      numberGood: numberInput,
      unitGood: unitInput
    } = req.body
    
    if (typeof textInput !== "string"
      || (!!numberInput && !Number.isFinite(numberInput))
      || (unitInput !== 'kg'
        && unitInput !== 'pcs'
        && unitInput !== '')) {
          console.log('here')
      res.json({
        status: 400,
        massage: 'Goods data is not valid'
      })
      return
    }
    const newGoodInDB = await GoodsList.create({
      name_of_good: textInput,
      number_of_good: numberInput || null,
      unit_of_good: unitInput,
    })
    if (!newGoodInDB) {
      res.json({
        status: 500,
        massage: 'Error on serv, goods is nit created'
      })

    }
    console.log('newGoodInDB', newGoodInDB)
    // const newGood = bringToCorrectForm(newGoodInDB)

    res.json({
      status: 200,
      massage: 'Goods is added'
    })
  } catch (err) {
    res.json({
      status: 500,
      massage: 'Error on serv, goods is nit created'
    })
    console.log(err)
  }
}

module.exports = createGood
