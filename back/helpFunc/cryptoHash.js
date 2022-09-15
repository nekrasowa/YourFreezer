const crypto = require('crypto')

const secret = 'userpass';

const getHash = (pass) => {
  const hashPass = crypto.createHmac('sha256', secret)
    .update(pass)
    .digest('hex')
  return hashPass
}

module.export = getHash