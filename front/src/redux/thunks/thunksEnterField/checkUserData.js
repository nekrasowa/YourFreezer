
import { checkUserDataOnServ } from "../../../requests/forEnterField/checkUserDataOnServ"
import { massageForUser } from "../../actions/actionsEnter"

export const checkUserData = (data) => {
  return (dispatch) => {
    checkUserDataOnServ(data)
    // .then((res) => {
      // return
    // })
    const massage = 'user come throw checking'
    dispatch(massageForUser(massage))
  }
}
