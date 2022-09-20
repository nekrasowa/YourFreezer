import { checkUserDataOnServ } from "../../../requests/forEnterField/checkUserDataOnServ"
import { massageForUser, permissionToChange, showWelcomeField } from "../../actions/actionsEnter"

export const checkUserData = (data) => {
  return async (dispatch) => {
    try {
      const res = checkUserDataOnServ(data)
    
      if(res.data.status !== 200) {
        dispatch(permissionToChange(false))
        dispatch(massageForUser(res.data.massage))
        return
      }

      dispatch(massageForUser(res.data.massage))
      dispatch(showWelcomeField())
      
    } catch (e) {
      dispatch(permissionToChange(false))
      dispatch(massageForUser(e.massage))
      console.log(e)
    }
  }
}