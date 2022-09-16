const User = require('../../../requestToDB/models/userModel')

async function getAllGoodsOfUser(req, res) {
  try {
    const {
      userEmail
    } = req.body

    const user = await User.findOne(
      { where: 
        { email_of_user: userEmail } }
    )
    



  } catch (e) {
    console.log(e)
  }
}

module.exports = enterToSystem

