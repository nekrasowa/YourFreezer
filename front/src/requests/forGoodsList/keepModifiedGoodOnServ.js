const axios = require('axios')

const url = new URL('http://localhost:5000')
const keepModifiedGoodURL = new URL('/goods/keepModifiedGood', url)

export async function keepModifiedGoodOnServ(dataOfGood) {
  const res = await axios({
    method: 'put',
    url: keepModifiedGoodURL,
    data: dataOfGood
  })
  return res.data
}
