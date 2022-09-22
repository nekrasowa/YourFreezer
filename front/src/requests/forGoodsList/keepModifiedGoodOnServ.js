const axios = require('axios')

const url = new URL('http://localhost:5000')
const keepModifiedGoodURL = new URL('/goods/keepModifiedGood', url)

export async function keepModifiedGoodOnServ(dataOfGood) {
  const jwt = localStorage.getItem('jwt')

  const res = await axios({
    method: 'put',
    url: keepModifiedGoodURL,
    headers: { 'Authorization': `Bearer ${jwt}` },
    data: dataOfGood
  })
  return res.data
}
