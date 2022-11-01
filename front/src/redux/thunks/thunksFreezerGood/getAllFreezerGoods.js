import { getGoods } from '../../actions/actionsContent'
import { showError } from '../../actions/actionsError'
import { getAllFreezerGoodsFromServ } from '../../../requests/forFreezerGoods/getAllFreezerGoodsFromServ'

export const getAllFreezerGoods = () => {
  return async (dispatch) => {
    try {
      const jwt = localStorage.getItem('jwt')
      if(!jwt) {
        dispatch(getGoods([]))
        return
      }
      
      const res = await getAllFreezerGoodsFromServ()
      if (res.status === 200) {
        dispatch(getGoods(res.data))
      }

    } catch (err) {
      console.log('ERROR', err)
        dispatch(getGoods([]))
        dispatch(showError(err.massage))
    }
  }
}