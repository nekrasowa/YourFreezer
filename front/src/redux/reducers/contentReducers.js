import {
  SHOW_INPUT_FIELD,
  HIDE_INPUT_FIELD,
  SHOW_ERROR_STYLE,
  HIDE_ERROR_STYLE,
  ADD_GOOD,
  GET_GOODS,
  EDIT_FREEZGOOD,
  SAVE_GOOD,
  DELETE_GOOD
} from '../types.js'

const initialState = {
  showInputField: false,
  incorrectInput: true,
  goods: [],
}

export const contentReducer = (state = initialState, action) => {
  if (action.type === SHOW_INPUT_FIELD) {
    return {
      ...state,
      showInputField: true
    }
  }
  if (action.type === HIDE_INPUT_FIELD) {
    return {
      ...state,
      showInputField: false
    }
  }
  if (action.type === SHOW_ERROR_STYLE) {
    return {
      ...state,
      incorrectInput: false
    }
  }
  if (action.type === HIDE_ERROR_STYLE) {
    return {
      ...state,
      incorrectInput: true
    }
  }
  if (action.type === ADD_GOOD) {
    console.log('[action.data]:', action.data)
    return {
      ...state,
      goods: [...state.goods, {
        goodName: action.data.goodName,
        goodNumber: action.data.goodNumber,
        goodUnit: action.data.goodUnit,
        typeOfGood: action.data.typeOfGood,
        id: action.data.id,
        editState: false,
      }]
    }
  }
  if (action.type === GET_GOODS) {
    return {
      ...state,
      goods: [...state.goods]
    }
  }
  if (action.type === EDIT_FREEZGOOD) {
    const editedIndex = state.goods
      .findIndex(good => good.id === action.id)

    const goodsWithNewEditState = [...state.goods]
    const editGood = { ...goodsWithNewEditState[editedIndex] }
    console.log('[editGood]', editGood)

    editGood.basicEditState = true 
    console.log('[editGood]', editGood)
    console.log('[goodsWithNewEditState]', goodsWithNewEditState)

    goodsWithNewEditState.splice(editedIndex, 1, editGood)
    console.log('[goodsWithNewEditState]', goodsWithNewEditState)
    return {
      ...state,
      goods: goodsWithNewEditState
    }
  }
  if (action.type === SAVE_GOOD) {
    const savedIndex = state.goods
      .findIndex(good => good.id === action.data.id)

    const goodsWithNewSavedGood = [...state.goods]
    const savedGood = { ...goodsWithNewSavedGood[savedIndex] }

    savedGood.basicEditState = false
    savedGood.goodName = action.data.newGoodName
    savedGood.goodNumber = action.data.newGoodNumber
    savedGood.goodUnit = action.data.newGoodUnit
    savedGood.id = action.data.id

    goodsWithNewSavedGood.splice(savedIndex, 1, savedGood)
    console.log('[goodsWithNewEditState]', goodsWithNewSavedGood)
    return {
      ...state,
      goods: goodsWithNewSavedGood
    }
  }
  if (action.type === DELETE_GOOD) {
    const deletedIndex = state.goods
      .findIndex(good => good.id === action.id )
    const goodsWithoutDeletedEl = [...state.goods]
    goodsWithoutDeletedEl.splice(deletedIndex, 1)
    return {
      ...state,
      goods: goodsWithoutDeletedEl
    }
  }
  // if (action.type === DELETE_BASIC_GOOD) {

  // }
  return state 
}


