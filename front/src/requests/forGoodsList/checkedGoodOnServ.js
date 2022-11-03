const axios = require('axios')

const url = new URL('http://localhost:5000')
const checkedGoodURL = new URL('/goods/checkedGood', url)

export async function checkedGoodOnServ(id, isChecked) {
  const jwt = localStorage.getItem('jwt')

  const res = await axios({
    method: 'put',
    url: checkedGoodURL,
    headers: { 'Authorization': `Bearer ${jwt}` },
    data: { id, isChecked }
  })
    return {
      message: res.data.message,
      status: res.data.status
    }
}
