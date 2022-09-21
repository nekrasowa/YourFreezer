const User = require('../../../requestToDB/models/userModel')
const {
  checkEmail,
  checkTel,
  checkPass
} = require('../../../helpFunc/checkData')
const { getHash } = require('../../../helpFunc/cryptoHash')

async function createNewUser(req, res) {
  try {
    const {
      userName,
      userEmail,
      userTel,
      userPass
    } = req.body

    if(
      !userName
      || !checkEmail(userEmail)
      || !checkTel(userTel)
      || !checkPass(userPass)
     ) {
      res.json({
        status: 400,
        massage: 'Data is not correct'
      })
      return
     }

    const hashPass = getHash(userPass)

    const newUser = await User.create({
      name_of_user: userName,
      tel_number_of_user: userTel,
      email_of_user: userEmail,
      password_of_user: hashPass
    })
    if (!newUser) {
      res.json({
        status: 500,
        massage: 'Error on serv, user is not created'
      })
    }

    res.json({
      status: 200,
      massage: 'User is added',
    })

  } catch (err) {
    res.json({
      status: 500,
      massage: 'Error on serv, user is not created'
    })
    console.log(err)
  }
}

module.exports = createNewUser
