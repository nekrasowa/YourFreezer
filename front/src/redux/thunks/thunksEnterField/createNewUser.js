import { createNewUserOnServ } from "../../../requests/forEnterField/createNewUserOnServ"
import { massageForUser, permissionToChange, showAuthField } from "../../actions/actionsEnter"

export const createNewUser =  (usersData) => {
  return async (dispatch) => {
    try {
    const res = await createNewUserOnServ(usersData)

    dispatch(massageForUser(res.massage))

    if(res.status !== 200) {
      dispatch(permissionToChange(false))
    }
    dispatch(permissionToChange(true))
    dispatch(showAuthField())

    } catch (e) {

    }
    
    
  }
}

