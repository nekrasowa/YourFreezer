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
