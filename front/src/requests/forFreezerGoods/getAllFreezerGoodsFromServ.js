const axios = require('axios')

const url = new URL('http://localhost:5000')
const getAllFreezerGoodsURL = new URL('/freezer/allFreezerGoods', url)

export async function getAllFreezerGoodsFromServ() {
  const jwt = localStorage.getItem('jwt')

  const res = await axios.get(getAllFreezerGoodsURL, {
    headers: { 'Authorization': `Bearer ${jwt}` }
  })

  return {
    data: res.data,
    status: res.status
  }
}
