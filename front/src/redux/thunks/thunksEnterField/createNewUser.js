import { createNewUserOnServ } from "../../../requests/forEnterField/createNewUserOnServ"
import { messageForUser, permissionToChange, showAuthField } from "../../actions/actionsEnter"

export const createNewUser = (usersData) => {
  return async (dispatch) => {
    try {
      const res = await createNewUserOnServ(usersData)

      dispatch(messageForUser(res.data.message))
      if (res.data.status !== 200) {
        dispatch(permissionToChange(false))
        return
      }
      console.log(res.data.jwt)

      dispatch(permissionToChange(true))
      dispatch(showAuthField())

    } catch (e) {
      console.log(e)
    }


  }
}

