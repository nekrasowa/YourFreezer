const GoodsList = require('../../../requestToDB/models/goodsListModel')

async function createGood(req, res) {
  try {
    const {
      textGood: textInput,
      numberGood: numberInput,
      unitGood: unitInput,
    } = req.body
    const userId = req.id

    if (typeof textInput !== "string"
      || (!!numberInput && !Number.isFinite(numberInput))
      || (unitInput !== 'kg'
        && unitInput !== 'pcs'
        && unitInput !== '')) {
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
      user_id: userId
    })
    if (!newGoodInDB) {
      res.json({
        status: 500,
        massage: 'Error on serv, goods is nit created'
      })
      return
    }

    // console.log(newGoodInDB)

    res.json({
      status: 200,
      massage: 'Goods is added',
      data: {
          textGood: newGoodInDB.dataValues.name_of_good,
          numberGood: newGoodInDB.dataValues.number_of_good,
          unitGood: newGoodInDB.dataValues.unit_of_good,
          id: newGoodInDB.dataValues.id,
      }
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
