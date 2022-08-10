const axios = require('axios')

const url = new URL('http://localhost:5000')
const deleteOneGoodURL = new URL('/goods/deleteOne', url)

export async function deleteOneGoodFromServ(id) {

  const res = await axios({
    method: 'delete',
    url: deleteOneGoodURL,
    data: { id }
  })
  return res.data
}
