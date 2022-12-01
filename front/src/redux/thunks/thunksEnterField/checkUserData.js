import { checkUserDataOnServ } from "../../../requests/forEnterField/checkUserDataOnServ"
import { messageForUser, permissionToChange, showWelcomeField } from "../../actions/actionsEnter"
import { initGoods } from "../../actions/actionsGoodsList"
import { getGoods } from "../../actions/actionsContent"

export const checkUserData = (data) => {
  return async (dispatch) => {
    try {
      const res = await checkUserDataOnServ(data)

      if(res.data.status !== 200) {
        dispatch(permissionToChange(false))
        dispatch(messageForUser(res.data.message))
        return
      }
      localStorage.setItem('jwt', res.data.jwt)

      dispatch(messageForUser(res.data.message))
      dispatch(showWelcomeField())
      dispatch(initGoods(res.data.goods))

      console.log('res.data.goodsFreezeer>>>', res.data.goodsFreezer)
      dispatch(getGoods(res.data.goodsFreezer))
      
    } catch (e) {
      dispatch(permissionToChange(false))
      dispatch(messageForUser(e.message))
      console.log(e)
    }
  }
}