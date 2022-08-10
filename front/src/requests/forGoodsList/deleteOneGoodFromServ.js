const axios = require('axios')

const url = new URL('http://localhost:5000')
const deleteOneGoodURL = new URL('/goods/deleteOne', url)

export async function deleteOneGoodFromServ(id) {
    const res = await axios.delet(deleteOneGoodURL, {id})

    return res.data
  }

