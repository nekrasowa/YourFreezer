import { createFreezerGoodOnServ } from '../../../requests/forFreezerGoods/createFreezerGoodOnServ'
import { addGood } from '../../actions/actionsContent'
import { showError } from '../../actions/actionsError'

export const createFreezerGood = (data) => {
  return async (dispatch) => {
    try {
      const res = await createFreezerGoodOnServ(data)

      if (res.status === 400 || res.status === 500) {
        dispatch(showError(res.massage))
        return
      }

      dispatch(addGood(data))

    } catch (err) {
      console.log('err', err)

    }
  }
}
