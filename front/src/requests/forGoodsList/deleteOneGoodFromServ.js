const axios = require('axios')

const url = new URL('http://localhost:5000')
const deleteOneGoodURL = new URL('/goods/deleteOne', url)

export async function deleteOneGoodFromServ(id) {
  try {
    const res = await axios({
      method: 'delete',
      url: deleteOneGoodURL,
      data: { id }
    })

    if (res.status === 200) {
      return {
        isOk: true
      }
    } else if (res.status === 500) {
      return { 
        massage: res.data.massage, 
        isOk: false
      }
    }
  } catch (err) {
    console.log(err)
  }
}
