import { DELETE_ONE } from "../types"
import { deleteOneGoodFromServ } from "../../requests/forGoodsList/deleteOneGoodFromServ"

export const deleteOneGood = (id) => {
  return (dispatch) => {
    deleteOneGoodFromServ(id).then(() => {
      dispatch({
        type: DELETE_ONE,
        id
      })
    }).catch((err) => {
      console.log('[err]:', err)
    })
  }
}
