import {
  SHOW_INPUT_FIELD,
  HIDE_INPUT_FIELD,
  SHOW_ERROR_STYLE,
  HIDE_ERROR_STYLE,
  ADD_BASIC_GOOD,
  GET_BASIC_GOODS,
  EDIT_BASIC_GOOD,
  SAVE_BASIC_GOOD,
  DELETE_BASIC_GOOD
} from '../types.js'

export function showInputField() {
  return {
    type: SHOW_INPUT_FIELD,
  }
}

export function hideInputField() {
  return {
    type: HIDE_INPUT_FIELD,
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
export function addBasicGood(data) {
  return {
    type: ADD_BASIC_GOOD,
    data
  }
}
export function getBasicGoods() {
  return {
    type: GET_BASIC_GOODS,

  }
}
export function editBasicGood(id) {
  return {
    type: EDIT_BASIC_GOOD,
    id
  }
}
  export function saveBasicGood(data) {
  return {
    type: SAVE_BASIC_GOOD,
    data
  }
}
export function deleteBasicGood(id) {
  return {
    type: DELETE_BASIC_GOOD,
    id
  }
}
