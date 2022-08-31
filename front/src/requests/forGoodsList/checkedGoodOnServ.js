const axios = require('axios')

const url = new URL('http://localhost:5000')
const checkedGoodURL = new URL('/goods/checkedGood', url)

export async function checkedGoodOnServ(id, isChecked) {

  const res = await axios({
    method: 'put',
    url: checkedGoodURL,
    data: { id, isChecked }
  })
    return {
      massage: res.data.massage,
      status: res.data.status
    }
}
