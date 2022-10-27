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

export function showInputField(typePlace) {
  return {
    type: SHOW_INPUT_FIELD,
    typePlace
  }
}

export function hideInputField(typePlace) {
  return {
    type: HIDE_INPUT_FIELD,
    typePlace
  }
}

export function showErrorStyle() {
  return {
    type: SHOW_ERROR_STYLE,
  }
}

export function hideErrorStyle() {
  return {
    type: HIDE_ERROR_STYLE,
  }
}
export function addGood(data) {
  return {
    type: ADD_GOOD,
    data
  }
}
export function getGoods() {
  return {
    type: GET_GOODS,

  }
}
export function editGood(id) {
  return {
    type: EDIT_FREEZGOOD,
    id
  }
}
  export function saveGood(data) {
  return {
    type: SAVE_GOOD,
    data
  }
}
export function deleteGood(id) {
  return {
    type: DELETE_GOOD,
    id
  }
}
