import { saveGood } from "../../actions/actionsContent"
import { showError } from "../../actions/actionsError"
import { keepModifiedFreezerGoodOnServ } from "../../../requests/forGoodsList/keepModifiedGoodOnServ"

export const keepModifiedGood = (data) => {

  return (dispatch) => {
    keepModifiedFreezerGoodOnServ(data).then((res) => {
      if (res.status === 200) {
        dispatch(saveGood(data))
        return
      } else if (res.status === 400
         || res.status === 500) {
        dispatch(showError(res.massage))
      }

      console.log('ERROR! Try again!', res.massage)
    }).catch((err) => {

    })
  }

}

