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
        res.data.sort((a, b) => {  
          if (a.goodName > b.goodName) {
            return 1;
          }
          if (a.goodName < b.goodName) {
            return -1;
          }
          return 0;
        })

        dispatch(getGoods(res.data))
      }

    } catch (err) {
      console.log('ERROR', err)
        dispatch(getGoods([]))
        dispatch(showError(err.message))
    }
  }
}