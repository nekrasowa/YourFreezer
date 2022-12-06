import {
  CREATE_GOOD,
  LOADING_GOODS,
  DELETE_ONE,
  CHECKED,
  EDIT_GOOD,
  KEEP_GOOD,
  INIT_GOODS,
  DELETE_ALL,
  INSERT,
  INSERT_CLOSE,
  CREATE_FREEZ_CONTENT,
  DELETE_FREEZ_CONTENT
} from '../types'

const initialState = {
  goods: [],
  insert: false,
  freezContent: []
}

export const createGoodReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_GOODS:

      return {
        ...state,
        goods: action.data
      }

    case CREATE_GOOD:
      return {
        ...state,
        goods: [...state.goods, {
          info: {
            textGood: action.data.textGood,
            numberGood: action.data.numberGood,
            unitGood: action.data.unitGood,
            id: action.data.id
          },
          states: {
            isChecked: false,
            fieldShow: 'ReadBlock'
          }
        }]
      }

    case LOADING_GOODS:
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

      return {
        ...state,
        goods: goodsWithKeepedEl
      }

    case DELETE_ALL:

      return {
        ...state,
        goods: []
      }

    case INSERT:
      return {
        ...state,
        insert: true
      }
    case INSERT_CLOSE:
      return {
        ...state,
        insert: false
      }

    case CREATE_FREEZ_CONTENT:
      const typedGood = state.freezContent.find((good) => good.id === action.data.id)

      if (typedGood) {
        const typedGoodIndex = state.freezContent
          .findIndex(good => good.id === action.data.id)

        const copyTypedGood = { ...typedGood }

        copyTypedGood.typeOfGood = action.data.typeOfGood

        const goodsWithTypedEl = [...state.freezContent]
        goodsWithTypedEl.splice(typedGoodIndex, 1, copyTypedGood)

        return {
          ...state,
          freezContent: goodsWithTypedEl
        }
      }
      return {
        ...state,
        freezContent: [...state.freezContent, {
          goodName: action.data.goodName,
          goodNumber: action.data.goodNumber,
          goodUnit: action.data.goodUnit,
          typeOfGood: action.data.typeOfGood,
          id: action.data.id
        }]
      }

    case DELETE_FREEZ_CONTENT:

      return {
        ...state,
        freezContent: []
      }

    default:
      return state
  }

}
