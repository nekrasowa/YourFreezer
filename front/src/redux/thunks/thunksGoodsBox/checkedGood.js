import { CHECKED, SHOW_ERROR } from "../../types"
import { checkedGoodOnServ } from "../../../requests/forGoodsList/checkedGoodOnServ"

export const checkedGood = (id, isChecked) => {
  return (dispatch) => {
    checkedGoodOnServ(id, isChecked).then((res) => {
      if (res.status === 200) {
        dispatch({
          type: CHECKED,
          id
        })
        return
      }
      if (res.status === 400 || res.status === 500) {
        dispatch({
          type: SHOW_ERROR,
          massage: res.massage
        })
        console.log('ERROR! Try again!', res.massage)
        return
      }
    }).catch((err) => {
      console.log('[err]:', err)
    })
  }
}
