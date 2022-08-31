import {
  INIT_GOODS,
  SHOW_ERROR
} from "../../types"
import { getAllGoodsFromServ } from "../../../requests/forGoodsList/getAllGoodsFromServ"

export const getAllGoods = () => {
  return async (dispatch) => {
    try {
      const response = await getAllGoodsFromServ()
      if (response.status === 200) {
        dispatch({
          type: INIT_GOODS,
          data: response.data
        })
      }

    } catch (err) {
      if (err.response.status === 500) {
        dispatch({
          type: INIT_GOODS,
          data: []
        })
        dispatch({
          type: SHOW_ERROR,
          massage: err.response.data.massage
        })
      }
    }
  }
}
