import { INIT_GOODS } from "../types"
import { deleteOneGoodFromServ } from "../../requests/forGoodsList/deleteOneGoodFromServ"

export const deleteOneGood = (id) => {
  return (dispatch) => {
    deleteOneGoodFromServ(id).then(() => {
        dispatch({
          type: INIT_GOODS,
          id
        })
      }).catch((err) => {
        console.log('[err]:', err)
      })
  }
}
