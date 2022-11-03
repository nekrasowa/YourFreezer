const { verifyJWT } = require('../EnterToSystemBack/jwtToken')

const checkJWTAddId = (req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(400).json({
			message: 'User don`t pass verification'
		})
	}
	const userJWT = req.headers.authorization.split(' ')[1]
	const userId = verifyJWT(userJWT, 'nestle')
	req.id = userId
	next()
}

module.exports = {
  checkJWTAddId
}
