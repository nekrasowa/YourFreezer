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
} from "../types.js"

export function createGoodAction(data) {
  return {
    type: CREATE_GOOD,
    data
  }
}

export function loadGoodsAction() {
  return {
    type: LOADING_GOODS,
  }
}

export function deleteGoodAction(id) {
  return {
    type: DELETE_ONE,
    id
  }
}
export function chackedGoodAction(id, isChecked) {
  return {
    type: CHECKED,
    id, 
    isChecked
  }
}
export function editGoodAction(id) {
  return {
    type: EDIT_GOOD,
    id
  }
}
export function keepGoodAction(data) {
  return {
    type: KEEP_GOOD,
    data
  }
}
export function initGoods(data) {
  return {
    type: INIT_GOODS,
    data
  }
}
export function deleteAllGoodsAction() {
  return {
    type: DELETE_ALL
  }
}
export function insertAction() {
  return {
    type: INSERT,
  }
}
export function insertCloseAction() {
  return {
    type: INSERT_CLOSE
  }
}
export function createFreezContentAction(data) {
  return {
    type: CREATE_FREEZ_CONTENT,
    data
  }
}
export function deleteFreezContentAction() {
  return {
    type: DELETE_FREEZ_CONTENT
  }
}


