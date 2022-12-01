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
  showInputFieldBasic: false,
  showInputFieldFreezer: false,
  showInputFieldVegFruts: false,
  isCorrectInput: true,
  freezGoods: [],
}

export const contentReducer = (state = initialState, action) => {
  if (action.type === SHOW_INPUT_FIELD) {
    if(action.typePlace === 'basic') {
      return {
        ...state,
        showInputFieldBasic: true
      }
    }
    if(action.typePlace === 'freezer') {
      return {
        ...state,
        showInputFieldFreezer: true
      }
    }
    if(action.typePlace === 'vegFruts') {
      return {
        ...state,
        showInputFieldVegFruts: true
      }
    }
  }
  if (action.type === HIDE_INPUT_FIELD) {
    if(action.typePlace === 'basic') {
      return {
        ...state,
        showInputFieldBasic: false
      }
    }
    if(action.typePlace === 'freezer') {
      return {
        ...state,
        showInputFieldFreezer: false
      }
    }
    if(action.typePlace === 'vegFruts') {
      return {
        ...state,
        showInputFieldVegFruts: false
      }
    }
  }
  if (action.type === SHOW_ERROR_STYLE) {
    return {
      ...state,
      isCorrectInput: false
    }
  }
  if (action.type === HIDE_ERROR_STYLE) {
    return {
      ...state,
      isCorrectInput: true
    }
  }
  if (action.type === ADD_GOOD) {
    return {
      ...state,
      freezGoods: [...state.freezGoods, {
        goodName: action.goodName,
        goodNumber: action.goodNumber,
        goodUnit: action.goodUnit,
        typeOfGood: action.typeOfGood,
        dataOfAddition: action.dataOfAddition,
        id: action.id,
        editState: false,
      }]
    }
  }
  if (action.type === GET_GOODS) {
    return {
      ...state,
      freezGoods: action.data
    }
  }
  if (action.type === EDIT_FREEZGOOD) {
    const editedIndex = state.freezGoods
      .findIndex(good => good.id === action.id)

    const goodsWithNewEditState = [...state.freezGoods]
    const editGood = { ...goodsWithNewEditState[editedIndex] }

    editGood.editState = true 

    goodsWithNewEditState.splice(editedIndex, 1, editGood)

    return {
      ...state,
      freezGoods: goodsWithNewEditState
    }
  }
  if (action.type === SAVE_GOOD) {
    const savedIndex = state.freezGoods
      .findIndex(good => good.id === action.data.id)

    const goodsWithNewSavedGood = [...state.freezGoods]
    const savedGood = { ...goodsWithNewSavedGood[savedIndex] }

    savedGood.editState = false
    savedGood.goodName = action.data.textInput
    savedGood.goodNumber = action.data.numberInput
    savedGood.goodUnit = action.data.unitInput
    savedGood.typeOfGood = action.data.typeOfGood
    savedGood.id = action.data.id

    goodsWithNewSavedGood.splice(savedIndex, 1, savedGood)

    return {
      ...state,
      freezGoods: goodsWithNewSavedGood
    }
  }
  if (action.type === DELETE_GOOD) {
    const deletedIndex = state.freezGoods
      .findIndex(good => good.id === action.id )
    const goodsWithoutDeletedEl = [...state.freezGoods]
    goodsWithoutDeletedEl.splice(deletedIndex, 1)
    return {
      ...state,
      freezGoods: goodsWithoutDeletedEl
    }
  }
  // if (action.type === DELETE_BASIC_GOOD) {

  // }
  return state 
}


