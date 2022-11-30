const freezerGoods = require('../../requestToDB/models/freezerGoodsModel')

async function createFreezerGood(req, res) {
  try {
    const {
      goodName: textInput,
      goodNumber: numberInput,
      goodUnit: unitInput,
      typeOfGood: typeOfGood
    } = req.body
    const userId = req.id
    
    if (typeof textInput !== "string"
      || (!!numberInput && !Number.isFinite(numberInput))
      || (unitInput !== 'kg'
        && unitInput !== 'pcs'
        && unitInput !== '')) {
      res.status(400).json({
        message: 'Goods data is not valid'
      })
      return
    }

    const dataOfAddition = new Date()
    const newGoodInDB = await freezerGoods.create({
      name_of_good: textInput,
      number_of_good: numberInput || null,
      unit_of_good: unitInput,
      type_of_good: typeOfGood,
      data_of_addition: dataOfAddition,
      user_id: userId
    })
    if (!newGoodInDB) {
      res.status(500).json({
        message: 'Error on serv, goods is n0t created'
      })
      return
    }

    res.status(200).json({
      message: 'Goods is added',
      data: {
          textGood: newGoodInDB.dataValues.name_of_good,
          numberGood: newGoodInDB.dataValues.number_of_good,
          unitGood: newGoodInDB.dataValues.unit_of_good,
          typeOfGood: newGoodInDB.dataValues.type_of_good,
          id: newGoodInDB.dataValues.id,
      }
    })
  } catch (err) {
    res.status(500).json({
      message: 'Error on serv, goods is nit created'
    })
    console.log(err)
  }
}

module.exports = createFreezerGood
