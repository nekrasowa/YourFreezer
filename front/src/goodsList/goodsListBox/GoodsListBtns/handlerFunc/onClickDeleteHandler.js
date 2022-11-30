import { deleteAllGoods } from '../../../../redux/thunks/thunksGoodsBox/deleteAllGoods'

export function onClickDeleteHandler(dispatch) {
  console.log('func')
  dispatch(deleteAllGoods())
}