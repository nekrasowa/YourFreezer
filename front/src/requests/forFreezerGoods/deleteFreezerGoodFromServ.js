const axios = require('axios')

const url = new URL('http://localhost:5000')
const deleteFreezerGoodURL = new URL('/freezer/deleteFreezerGood', url)

export async function deleteFreezerGoodFromServ(id) {
  const jwt = localStorage.getItem('jwt')

  try {
    const res = await axios({
      method: 'delete',
      url: deleteFreezerGoodURL,
      headers: { 'Authorization': `Bearer ${jwt}` },
      data: { id }
    })

    if (res.status === 200) {
      return {
        status: 200      
      }
    } else if (res.status === 500) {
      return { 
        status: 500,    
        message: res.data.message, 
      }
    }
  } catch (err) {
    console.log(err)
  }
}
