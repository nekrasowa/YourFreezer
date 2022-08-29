const axios = require('axios')

const url = new URL('http://localhost:5000')
const getAllGoodsURL = new URL('/goods/allGoods', url)

export async function getAllGoodsFromServ() {
    const res = await axios.get(getAllGoodsURL)
    console.log('res>>>>>', res)
    if (res.status === 200) {
      return {
        data: res.data, 
        status: res.status
      }
    } else if (res.status === 500) {
      return {
        status: res.status,
        massage: res.massage
      }
    }
    
    return res.status
  }
