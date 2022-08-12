const axios = require('axios')

const url = new URL('http://localhost:5000')
const checkedGoodURL = new URL('/goods/checkedGood', url)

export async function checkedGoodOnServ(id) {

  const res = await axios({
    method: 'put',
    url: checkedGoodURL,
    data: { id }
  })
  return res.data
}
