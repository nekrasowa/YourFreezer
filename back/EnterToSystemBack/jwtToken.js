// создание токена, сохранение в БД, передача юзеру
const jwt = require('jsonwebtoken')
const { getHash } = require('../helpFunc/cryptoHash')

function createJWT(payload, secretStr) {
  const secret = getHash(secretStr)
  return jwt.sign(payload, secret)
}

function verifyJWT(token, secretStr) {
  const secret = getHash(secretStr)
  return jwt.verify(token, secret, (err, decodet) => {
    if (err) {
      res.json({
        status: 400,
        massage: 'User does not pass verification'
      })
      return 
    }
    return decodet.id
  })
}

module.exports = {
  createJWT,
  verifyJWT
}


// jwt.decode('jwtString') //whitout verify get data

