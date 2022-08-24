import { createGoodOnServ } from "../../../requests/forGoodsList/createGoodOnServ"
import { createGoodAction } from '../../actions/actionsGoodsList'
import { getAllGoods } from './getAllGoods'

export const createGood = (data) => {
  return (dispatch) => {
    createGoodOnServ(data).then((res) => {
      if (res.isOk) {
        dispatch(getAllGoods())
        dispatch(createGoodAction(res.data))
        return
      }
      console.log('ERROR! Try again!', res.massage)
    }).catch((err) => {

    })
  }

}

