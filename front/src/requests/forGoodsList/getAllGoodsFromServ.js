const axios = require('axios')

const url = new URL('http://localhost:5000')
const getAllGoodsURL = new URL('/goods/all', url)

export async function getAllGoodsFromServ() {
    const res = await axios.get(getAllGoodsURL)

    return res.data
  }
