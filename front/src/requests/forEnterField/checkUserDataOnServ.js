const axios = require('axios')

const url = new URL('http://localhost:5000')
const checkUserDataOnServURL = new URL('/users/enterToSystem', url)

export async function checkUserDataOnServ(usersData) {
  const res = await axios({
    method:'post',
    url: checkUserDataOnServURL,
    data: usersData
  })

  return res
}
