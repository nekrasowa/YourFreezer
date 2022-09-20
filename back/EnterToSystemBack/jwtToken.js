// создание токена, сохранение в БД, передача юзеру
const jwt = require('jsonwebtoken')
const { getHash } = require('../helpFunc/cryptoHash')

function createJWT(payload, secretStr) {
  const secret = getHash(secretStr)
  return jwt.sign(payload, secret)
}

function verifyJWT(token, hashPass) {
  jwt.verify(token, hashPass)
}


module.exports = { 
  createJWT, 
  verifyJWT 
}






// jwt.decode('jwtString') //whitout verify get data

