const axios = require('axios')

const url = new URL('http://localhost:5000')
const createNewUserOnServURL = new URL('/register', url)

export async function createNewUserOnServ(usersData) {
  const res = await axios({
    method:'post',
    url: createNewUserOnServURL,
    data: usersData
  })

  return res
}
