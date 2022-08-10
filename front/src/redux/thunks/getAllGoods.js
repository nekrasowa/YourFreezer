import { INIT_GOODS } from "../types"
import { getAllGoodsFromServ } from "../../requests/forGoodsList/getAllGoodsFromServ"


export const getAllGoods = () => {
  return (dispatch) => {
    getAllGoodsFromServ().then((goods) => {
        dispatch({
          type: INIT_GOODS,
          data: goods
        })
      }).catch((err) => {
        console.log('[err]:', err)
      })
  }
}
