import { createGoodOnServ } from "../../../requests/forGoodsList/createGoodOnServ"
import { createGoodAction } from '../../actions/actionsGoodsList'
import { getAllGoods } from './getAllGoods'
import { SHOW_ERROR } from "../../types"


export const createGood = (data) => {
  return (dispatch) => {
    createGoodOnServ(data).then((res) => {
      if (res.status === 200) {
        dispatch(getAllGoods())
        dispatch(createGoodAction(res.data))
        return
      } else if (res.status === 400 || res.status === 500) {
        dispatch({
          type: SHOW_ERROR,
          massage: res.massage
        })
      }
      console.log('ERROR! Try again!', res.massage)
    }).catch((err) => {

    })
  }

}

