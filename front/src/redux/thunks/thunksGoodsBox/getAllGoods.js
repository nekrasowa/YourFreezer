import { initGoods } from "../../actions/actionsGoodsList"
import { showError } from "../../actions/actionsError"
import { getAllGoodsFromServ } from "../../../requests/forGoodsList/getAllGoodsFromServ"

export const getAllGoods = () => {
  return async (dispatch) => {
    try {
      const jwt = localStorage.getItem('jwt')
      if(!jwt) {
        dispatch(initGoods([]))
        return
      }
      
      const res = await getAllGoodsFromServ()
      if (res.status === 200) {
        dispatch(initGoods(res.data))
      }

    } catch (err) {
      console.log('ERROR', err)
        dispatch(initGoods([]))
        dispatch(showError(err.message))
    }
  }
}
