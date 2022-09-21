import { checkUserDataOnServ } from "../../../requests/forEnterField/checkUserDataOnServ"
import { massageForUser, permissionToChange, showWelcomeField } from "../../actions/actionsEnter"
import { initGoods } from "../../actions/actionsGoodsList"

export const checkUserData = (data) => {
  return async (dispatch) => {
    try {
      const res = await checkUserDataOnServ(data)

      if(res.data.status !== 200) {
        dispatch(permissionToChange(false))
        dispatch(massageForUser(res.data.massage))
        return
      }
      localStorage.setItem('jwt', res.data.jwt)

      console.log(res.data)

      dispatch(massageForUser(res.data.massage))
      dispatch(showWelcomeField())
      dispatch(initGoods(res.data.goods))
      
    } catch (e) {
      dispatch(permissionToChange(false))
      dispatch(massageForUser(e.massage))
      console.log(e)
    }
  }
}