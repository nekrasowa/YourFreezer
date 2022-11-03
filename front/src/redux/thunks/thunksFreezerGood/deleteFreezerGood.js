import { deleteGood } from '../../actions/actionsContent'
import { showError } from '../../actions/actionsError'

import { deleteFreezerGoodFromServ } from '../../../requests/forFreezerGoods/deleteFreezerGoodFromServ'

export const deleteFreezerGood = (id) => {
  return async (dispatch) => {
    try {
    console.log('thunk')

      const res = await deleteFreezerGoodFromServ(id)

      if (res.status === 500 || res.status === 400) {
        dispatch(showError(res.data.message))
        return
      }
      dispatch(deleteGood(id))

    } catch(err) {
      dispatch(showError(err.message))

      console.log('[err]:', err)
    }
  }
}
