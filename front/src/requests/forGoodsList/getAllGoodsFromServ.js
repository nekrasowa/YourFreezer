const axios = require('axios')

const url = new URL('http://localhost:5000')
const getAllGoodsURL = new URL('/goods/allGoods', url)

export async function getAllGoodsFromServ() {
    const res = await axios.get(getAllGoodsURL)

    return res.data
  }
