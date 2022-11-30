import { deleteAllGoodsAction } from '../../actions/actionsGoodsList'
import { showError, hideError } from '../../actions/actionsError'
import { deleteAllGoodsFromServ } from '../../../requests/forGoodsList/deleteAllGoodsFromServ'

export const deleteAllGoods = () => {
  return (dispatch) => {
    deleteAllGoodsFromServ().then((res) => {
      console.log(res)
      if (res.status === 400 || res.status === 500) {
        dispatch(showError(res.massage)) 
        return
      } 
        dispatch(deleteAllGoodsAction())
        dispatch(hideError())
      
    }).catch((err) => {
      console.log('[err]:', err)
    })
  }
}
