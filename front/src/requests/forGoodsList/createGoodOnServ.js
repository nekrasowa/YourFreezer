const axios = require('axios')

const url = new URL('http://localhost:5000')
const createGoodOnServURL = new URL('/goods/createGood', url)

export async function createGoodOnServ(dataOfGood) {
  console.log('dataOfGood:', dataOfGood)
  if (dataOfGood.numberGood === '') {
    delete dataOfGood.numberGood
  }

  const jwt = localStorage.getItem('jwt')

  const res = await axios({
    method: 'post',
    url: createGoodOnServURL,
    headers: {'Authorization': `Bearer ${jwt}`},
    data: dataOfGood
  })
  console.log('[res.data]:', res.data)

  return res.data
}
