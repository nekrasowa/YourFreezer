import { 
  DELETE_ONE,
  SHOW_ERROR
 } from "../../types"
import { deleteOneGoodFromServ } from "../../../requests/forGoodsList/deleteOneGoodFromServ"

export const deleteOneGood = (id) => {
  return (dispatch) => {
    deleteOneGoodFromServ(id).then((res) => {
      if (res.isOk) {
        dispatch({
          type: DELETE_ONE,
          id
        }) 
      return
      } 
        dispatch({
          type: SHOW_ERROR,
          massage: res.massage
        })
      
    }).catch((err) => {
      console.log('[err]:', err)
    })
  }
}
