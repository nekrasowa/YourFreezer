import { deleteGood } from '../../actions/actionsContent'
import { showError } from '../../actions/actionsError'

import { deleteFreezerGoodFromServ } from '../../../requests/forGoodsList/deleteOneGoodFromServ'

export const deleteFreezerGood = (id) => {
  return (dispatch) => {
    deleteFreezerGoodFromServ(id).then((res) => {
      if (res.isOk) {
        dispatch(deleteGood(id)) 
      return
      } 
        dispatch(showError(res.massage))
      
    }).catch((err) => {
      console.log('[err]:', err)
    })
  }
}
