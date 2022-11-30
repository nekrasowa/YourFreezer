const axios = require('axios')

const url = new URL('http://localhost:5000')
const deleteAllGoodsURL = new URL('/goods/deleteAll', url)

export async function deleteAllGoodsFromServ() {
  const jwt = localStorage.getItem('jwt')

  try {
    const res = await axios({
      method: 'delete',
      url: deleteAllGoodsURL,
      headers: { 'Authorization': `Bearer ${jwt}` },

    })

    if (res.status === 500 || res.status === 400 ) {
      return {
        message: res.message, 
      }
    } 
    return {status: res.status}
    
  } catch (err) {
    console.log(err)
  }
}
