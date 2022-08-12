import { KEEP_GOOD } from "../types"
import { keepModifiedGoodOnServ } from "../../requests/forGoodsList/keepModifiedGoodOnServ"

export const keepModifiedGood = (data) => {

  return (dispatch) => {
    keepModifiedGoodOnServ(data).then((res) => {
      if (res.isOk) {
        dispatch({
          type: KEEP_GOOD,
          data
        })
        return
      }
      console.log('ERROR! Try again!', res.massage)
    }).catch((err) => {

    })
  }

}

