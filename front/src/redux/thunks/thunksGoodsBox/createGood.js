import { createGoodOnServ } from '../../../requests/forGoodsList/createGoodOnServ'
import { createGoodAction } from '../../actions/actionsGoodsList'
import { SHOW_ERROR } from '../../types'


export const createGood = (data) => {
  return async (dispatch) => {
    try {
      const res = await createGoodOnServ(data)

      if (res.status === 200) {
        dispatch(createGoodAction(res.data))
        return
      } else if (res.status === 400 || res.status === 500) {
        dispatch({
          type: SHOW_ERROR,
          massage: res.data.massage
        })
      }
    } catch (err) {
      console.log('err', err)

    }
  }
}

