import { initGoods } from "../../actions/actionsGoodsList"
import { showError } from "../../actions/actionsError"
import { getAllGoodsFromServ } from "../../../requests/forGoodsList/getAllGoodsFromServ"

export const getAllGoods = () => {
  return async (dispatch) => {
    try {
      const res = await getAllGoodsFromServ()
      if (res.data.status === 200) {
        dispatch(initGoods(res.data.data))
      }

    } catch (err) {
        dispatch(initGoods([]))
        dispatch(showError(err.massage))
    }
  }
}
