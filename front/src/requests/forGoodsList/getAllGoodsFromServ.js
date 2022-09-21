const axios = require('axios')

const url = new URL('http://localhost:5000')
const getAllGoodsURL = new URL('/goods/allGoods', url)

export async function getAllGoodsFromServ() {
  const jwt = localStorage.getItem('jwt')

  const res = await axios.get(getAllGoodsURL, {
    headers: { 'Authorization': `Bearer ${jwt}` }
  })
  if (res.data.status !== 200) {
    return {
      status: res.data.status,
      massage: res.data.massage
    }
  }
  return {
    data: res.data,
    status: res.status
  }
}
