import { createNewUserOnServ } from "../../../requests/forEnterField/createNewUserOnServ"
import { massageForNewUser } from "../../actions/actionsEnter"

export const createNewUser = (data) => {
  return (dispatch) => {
    createNewUserOnServ(data)
    // .then((res) => {
      // return
    // })
    const massage = 'new user is added'
    dispatch(massageForNewUser(massage))
  }
}

