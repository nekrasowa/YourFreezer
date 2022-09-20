const crypto = require('crypto')

const secret = 'userpass';

function getHash(pass) {
  const hashPass = crypto.createHmac('sha256', secret)
    .update(pass)
    .digest('hex')
  return hashPass
}

module.exports = { getHash }