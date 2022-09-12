const User = require('../../../requestToDB/models/userModel')

async function createNewUser(req, res) {
  try {
    const {
      userName,
      userEmail,
      userTel,
      userPass
    } = req.body

    const newUser = await User.create({
      name_of_user: userName,
      tel_number_of_user: userTel,
      email_of_user: userEmail,
      password_of_user: userPass
    })
    if (!newUser) {
      res.json({
        status: 500,
        massage: 'Error on serv, user is nit created'
      })
    }

      res.json({
        status: 200,
        massage: 'User is added'
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
