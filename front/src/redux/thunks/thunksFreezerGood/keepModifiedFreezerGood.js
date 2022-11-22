import { saveGood } from "../../actions/actionsContent"
import { showError } from "../../actions/actionsError"
import { keepModifiedFreezerGoodOnServ } from "../../../requests/forFreezerGoods/keepModifiedFreezerGoodOnServ"

export const keepModifiedGood = (data) => {

  return async (dispatch) => {
    try {
      const res = await keepModifiedFreezerGoodOnServ(data)

      if (res.status === 500 || res.status === 400) {
        dispatch(showError(res.data.message))
        return
      }
      dispatch(saveGood(data))

    } catch (err) {
      dispatch(showError(err.message))
    }
  }

}

