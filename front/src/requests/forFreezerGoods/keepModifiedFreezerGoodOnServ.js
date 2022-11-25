const axios = require('axios')

const url = new URL('http://localhost:5000')
const keepModifiedFreezerGoodURL = new URL('/freezer/keepModifiedFreezerGood', url)

export async function keepModifiedFreezerGoodOnServ(dataOfGood) {
  const jwt = localStorage.getItem('jwt')

  const res = await axios({
    method: 'put',
    url: keepModifiedFreezerGoodURL,
    headers: { 'Authorization': `Bearer ${jwt}` },
    data: dataOfGood
  })
  console.log('serv after',  res.data)

  return res.data
}
