import { CHECKED } from "../../types"
import { checkedGoodOnServ } from "../../../requests/forGoodsList/checkedGoodOnServ"

export const checkedGood = (id, isChecked) => {
  return (dispatch) => {
    checkedGoodOnServ(id, isChecked).then((res) => {
      console.log('[RES in th>>>]', res)

      if (res.isOk) {
        dispatch({
          type: CHECKED,
          id
        })
        console.log('[RES massage]', res.massage)
      
      }
      if (!res.isOk) {
        console.log('ERROR! Try again!', res.massage)
      }
    }).catch((err) => {
      console.log('[err]:', err)
    })
  }
}
