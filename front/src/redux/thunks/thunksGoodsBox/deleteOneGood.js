import { DELETE_ONE } from "../../types"
import { deleteOneGoodFromServ } from "../../../requests/forGoodsList/deleteOneGoodFromServ"

export const deleteOneGood = (id) => {
  return (dispatch) => {
    deleteOneGoodFromServ(id).then((res) => {
      console.log('[RES in th>>>]', res)

      if (res.isOk) {
        dispatch({
          type: DELETE_ONE,
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
