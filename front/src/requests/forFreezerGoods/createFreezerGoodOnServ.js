const axios = require('axios')

const url = new URL('http://localhost:5000')
const createFreezerGoodOnServURL = new URL('/freezer/createFreezerGood', url)

export async function createFreezerGoodOnServ(dataOfGood) {
  if (dataOfGood.numberGood === '') {
    delete dataOfGood.numberGood
  }

  const jwt = localStorage.getItem('jwt')

  const res = await axios({
    method: 'post',
    url: createFreezerGoodOnServURL,
    headers: {'Authorization': `Bearer ${jwt}`},
    data: dataOfGood
  })
  console.log('serv after',  res.data)

  return res.data
}
