const axios = require('axios')

const url = new URL('http://localhost:5000')
const deleteOneGoodURL = new URL('/goods/deleteOne', url)

export async function deleteOneGoodFromServ(id) {
    // const params = {
    //   id: id
    // }
    // const res = await axios.delete(deleteOneGoodURL, params)


    const res = await axios({
      method: 'delete',
      url: deleteOneGoodURL,
      data: { id }
     })
    console.log('[RES>>>>]', res.data)

    return res.data
  }
