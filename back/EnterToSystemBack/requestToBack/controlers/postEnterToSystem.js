const User = require('../../../requestToDB/models/userModel')
const GoodsList = require('../../../requestToDB/models/goodsListModel')
const FreezerGoods = require('../../../requestToDB/models/freezerGoodsModel')
const {
  checkEmail,
  checkPass
} = require('../../../helpFunc/checkData')
const { getHash } = require('../../../helpFunc/cryptoHash')
const { createJWT } = require('../../jwtToken')
const bringToCorrectForm = require('../../../helpFunc/bringToCorrectForm')
const bringToCorrectFreezForm = require('../../../helpFunc/bringToCorrectFreezForm')

async function enterToSystem(req, res) {
  try {
    const {
      userEmail,
      userPass,
    } = req.body

    if (
      !checkEmail(userEmail)
      || !checkPass(userPass)
    ) {
      res.json({
        status: 400,
        message: 'Data is not correct'
      })
      return
    }

    const hashPass = getHash(userPass)

    const enteredUser = await User.findOne(
      { where: 
        { email_of_user: userEmail,
          password_of_user: hashPass
        } }
    )
  
    if (!enteredUser) {
      res.json({
        status: 400,
        message: 'User does not find'
      })
      return
    }

    const JWTPayload = { 
      id: enteredUser.dataValues.id,
      pass: hashPass,
      email: userEmail
    }
    const jwt = createJWT(JWTPayload, 'nestle')

    const goodsFromDB = await GoodsList
      .findAll({ where: { user_id: enteredUser.dataValues.id } })

    const goodsFreezerFromDB = await FreezerGoods
      .findAll({ where: { user_id: enteredUser.dataValues.id } })


    const goods = goodsFromDB.map(bringToCorrectForm)
    const goodsFreezer = goodsFreezerFromDB.map(bringToCorrectFreezForm)
    console.log(goodsFreezer)
    res.json({
      status: 200,
      message: 'user enters',
      jwt,
      goods,
      goodsFreezer
    })
    return

  } catch (e) {
    console.log(e)
  }
}

module.exports = enterToSystem

