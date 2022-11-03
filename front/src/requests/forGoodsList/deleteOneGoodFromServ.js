const axios = require('axios')

const url = new URL('http://localhost:5000')
const deleteOneGoodURL = new URL('/goods/deleteOne', url)

export async function deleteOneGoodFromServ(id) {
  const jwt = localStorage.getItem('jwt')

  try {
    const res = await axios({
      method: 'delete',
      url: deleteOneGoodURL,
      headers: { 'Authorization': `Bearer ${jwt}` },
      data: { id }
    })

    if (res.status === 200) {
      return {
        isOk: true
      }
    } else if (res.status === 500) {
      return { 
        message: res.data.message, 
        isOk: false
      }
    }
  } catch (err) {
    console.log(err)
  }
}
