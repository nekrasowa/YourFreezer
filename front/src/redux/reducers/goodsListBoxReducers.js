import {
  CREATE_GOOD,
  LOADING_GOODS,
  DELETE_ONE,
  CHECKED,
  EDIT_GOOD,
  KEEP_GOOD
} from '../types'

const initialState = {
  goods: [
    {
      info: {
        textGood: 'apple',
        numberGood: 5,
        unitGood: 'kg',
        id: 'lkjhe78'
      },
      states: {
        isChecked: true,
        fieldShow: 'ReadBlock'
      }
    },
    {
      info: {
        textGood: 'meat',
        numberGood: 4,
        unitGood: 'kg',
        id: 'lr4hgi78',
      },
      states: {
        isChecked: true,
        fieldShow: 'ReadBlock'

      }
    },
    {
      info: {
        textGood: 'bread',
        numberGood: 1,
        unitGood: 'pcs',
        id: 'lk67uh8',
      },
      states: {
        isChecked: false,
        fieldShow: 'ReadBlock'

      }
    },
  ],
}

export const createGoodReducer = (state = initialState, action) => {

  switch (action.type) {
    case CREATE_GOOD:
      return {
        ...state,
        goods: [...state.goods, {
          info: {
            textGood: action.data.info.textGood,
            numberGood: action.data.info.numberGood,
            unitGood: action.data.info.unitGood,
            id: action.data.info.id
          },
          states: {
            isChecked: false,
            fieldShow: 'ReadBlock'
          }
        }]
      }

    case LOADING_GOODS:
      console.log('[action.data]:', action)

      return {
        ...state,
        goods: [...state.goods]
      }
    case DELETE_ONE:
      const deletedGoodIndex = state.goods
        .findIndex(good => good.info.id === action.id)

      const goodsWithoutDeletedEl = [...state.goods]
      goodsWithoutDeletedEl.splice(deletedGoodIndex, 1)
      return {
        ...state,
        goods: goodsWithoutDeletedEl
      }
    case CHECKED:
      const chackedGood = state.goods
        .find(good => good.info.id === action.id)
      const chackedGoodIndex = state.goods
        .findIndex(good => good.info.id === action.id)

      const copyChackedGood = { ...chackedGood }

      const copyChackedGoodState = { ...copyChackedGood.states }

      copyChackedGoodState.isChecked
        ? copyChackedGoodState.isChecked = false
        : copyChackedGoodState.isChecked = true
      copyChackedGood.states = copyChackedGoodState

      const goodsWithCheckedEl = [...state.goods]
      goodsWithCheckedEl.splice(chackedGoodIndex, 1, copyChackedGood)

      return {
        ...state,
        goods: goodsWithCheckedEl
      }
    case EDIT_GOOD:
      const showModify = 'ModifyBlock'
      const editedGood = state.goods
        .find(good => good.info.id === action.id)
      const editedGoodIndex = state.goods
        .findIndex(good => good.info.id === action.id)

      const copyEditedGood = { ...editedGood }
      const copyEditedGoodState = { ...copyEditedGood.states }
      copyEditedGoodState.fieldShow = showModify

      const updatedGoodShow = { ...editedGood }
      updatedGoodShow.states = copyEditedGoodState

      const goodsWithEditedEl = [...state.goods]
      goodsWithEditedEl.splice(editedGoodIndex, 1, updatedGoodShow)
      return {
        ...state,
        goods: goodsWithEditedEl
      }
    case KEEP_GOOD:
      const showGood = 'ReadBlock'
      const keepedGood = state.goods
        .find(good => good.info.id === action.data.id)
      const keepedGoodIndex = state.goods
        .findIndex(good => good.info.id === action.data.id)

      const copyKeepedGood = { ...keepedGood }

      const copyKeepedGoodState = { ...copyKeepedGood.states }
      copyKeepedGoodState.fieldShow = showGood

      const copyKeepedGoodInfo = { ...copyKeepedGood.info }
      copyKeepedGoodInfo.textGood = action.data.textInput
      copyKeepedGoodInfo.numberGood = action.data.numberInput
      copyKeepedGoodInfo.unitGood = action.data.unitInput

      const updatedGood = { ...keepedGood }
      updatedGood.states = copyKeepedGoodState
      updatedGood.info = copyKeepedGoodInfo

      const goodsWithKeepedEl = [...state.goods]

      goodsWithKeepedEl.splice(keepedGoodIndex, 1, updatedGood)
        console.log('[goodsWithKeepedEl]:', goodsWithKeepedEl)

      return {
        ...state,
        goods: goodsWithKeepedEl
      }
    default:
      return state
  }
}
