import { KEEP_GOOD, SHOW_ERROR } from "../../types"
import { keepModifiedGoodOnServ } from "../../../requests/forGoodsList/keepModifiedGoodOnServ"

export const keepModifiedGood = (data) => {

  return (dispatch) => {
    keepModifiedGoodOnServ(data).then((res) => {
      if (res.status === 200) {
        dispatch({
          type: KEEP_GOOD,
          data
        })
        return
      } else if (res.status === 400
         || res.status === 500) {
        dispatch({
          type: SHOW_ERROR,
          message: res.message
        })
      }

      console.log('ERROR! Try again!', res.message)
    }).catch((err) => {

    })
  }

}

