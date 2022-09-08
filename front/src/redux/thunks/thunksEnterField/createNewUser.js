import { createNewUserOnServ } from "../../../requests/forEnterField/createNewUserOnServ"
import { massageForUser } from "../../actions/actionsEnter"

export const createNewUser = (data) => {
  return (dispatch) => {
    createNewUserOnServ(data)
    // .then((res) => {
      // return
    // })
    const massage = 'new user is added'
    dispatch(massageForUser(massage))
  }
}

