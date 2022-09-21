const User = require('../../../requestToDB/models/userModel')
const {
  checkEmail,
  checkPass
} = require('../../../helpFunc/checkData')
const { getHash } = require('../../../helpFunc/cryptoHash')
const { createJWT } = require('../../jwtToken')

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
        massage: 'Data is not correct'
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
        massage: 'User does not find'
      })
      return
    }

    const JWTPayload = { 
      id: enteredUser.dataValues.id,
      pass: hashPass,
      email: userEmail
    }
    const jwt = createJWT(JWTPayload, 'nestle')

    
    res.json({
      status: 200,
      massage: 'user enters',
      jwt
    })
    return

  } catch (e) {
    console.log(e)
  }
}

module.exports = enterToSystem

