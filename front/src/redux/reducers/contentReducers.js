import {
  SHOW_INPUT_FIELD,
  HIDE_INPUT_FIELD,
  SHOW_ERROR_STYLE,
  HIDE_ERROR_STYLE,
  ADD_BASIC_GOOD,
  GET_BASIC_GOODS,
  EDIT_BASIC_GOOD,
  DELETE_BASIC_GOOD
} from '../types.js'

const initialState = {
  showInputField: false,
  incorrectInput: true,
  basicGoods: []
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
  if (action.type === ADD_BASIC_GOOD) {
    return {
      ...state,
      basicGoods: [...state.basicGoods, {
        goodName: action.data.goodName,
        goodNumber: action.data.goodNumber,
        goodUnit: action.data.goodUnit,
        id: action.data.id
      }]
    }
  }
  if (action.type === GET_BASIC_GOODS) {
    return {
      ...state,
      basicGoods: [...state.basicGoods]
    }
  }
  if (action.type === EDIT_BASIC_GOOD) {
    return {
      ...state,
    }
  }
  if (action.type === DELETE_BASIC_GOOD) {
    const deletedIndex = state.basicGoods
      .findIndex(good => good.id === action.id )
    const goodsWithoutDeletedEl = [...state.basicGoods]
    goodsWithoutDeletedEl.splice(deletedIndex, 1)
    return {
      ...state,
      basicGoods: goodsWithoutDeletedEl
    }
  }

  return state 
}


