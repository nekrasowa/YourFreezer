function checkEmail(email) {
  const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
  return email && re.test(String(email).toLowerCase())
}

function checkTel(tel) {
  const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
  return tel && re.test(String(tel).toLowerCase())
}

function checkPass(pass) {
  const re = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
  return pass && re.test(String(pass))
}

module.exports = {
  checkEmail,
  checkTel,
  checkPass
}
