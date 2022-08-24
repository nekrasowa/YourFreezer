import { INIT_GOODS } from "../../types"
import { getAllGoodsFromServ } from "../../../requests/forGoodsList/getAllGoodsFromServ"

export const getAllGoods = () => {
  console.log('{ in thunk }')

  return (dispatch) => {
    try {
      console.log('{ in thunk }')
      getAllGoodsFromServ().then((goods) => {
        dispatch({
          type: INIT_GOODS,
          data: goods
        })
      }).catch((err) => {
        console.log('[err]:', err)
      })
    } catch (err) {
      console.log('[err]:', err)

    }

  }
}
