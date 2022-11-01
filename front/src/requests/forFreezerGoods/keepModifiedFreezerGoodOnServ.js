const axios = require('axios')

const url = new URL('http://localhost:5000')
const keepModifiedFreezerGoodURL = new URL('/goods/keepModifiedGood', url)

export async function keepModifiedFreezerGoodOnServ(dataOfGood) {
  const jwt = localStorage.getItem('jwt')

  const res = await axios({
    method: 'put',
    url: keepModifiedFreezerGoodURL,
    headers: { 'Authorization': `Bearer ${jwt}` },
    data: dataOfGood
  })
  return res.data
}
