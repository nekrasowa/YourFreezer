import { deleteAllGoods } from '../../../../redux/thunks/thunksGoodsBox/deleteAllGoods'

export function onClickDeleteHandler(dispatch) {
  dispatch(deleteAllGoods())
}