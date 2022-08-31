const axios = require('axios')

const url = new URL('http://localhost:5000')
const createGoodOnServURL = new URL('/goods/createGood', url)

export async function createGoodOnServ(dataOfGood) {
  if (dataOfGood.numberGood === '') {
    delete dataOfGood.numberGood
  }
  const res = await axios({
    method: 'post',
    url: createGoodOnServURL,
    data: dataOfGood
  })
  console.log('[res.data]:', res.data)

  return res.data
}
