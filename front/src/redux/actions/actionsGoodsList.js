import {
  CREATE_GOOD,
  LOADING_GOODS,
  DELETE_ONE,
  CHECKED,
  EDIT_GOOD,
  KEEP_GOOD
} from "../types.js"

export function createGood(data) {
  return {
    type: CREATE_GOOD,
    data
  }
}

export function loadGoods() {
  return {
    type: LOADING_GOODS,
  }
}

export function deleteGood(id) {
  return {
    type: DELETE_ONE,
    id
  }
}
export function chackedGood(id) {
  return {
    type: CHECKED,
    id
  }
}
export function editGood(id) {
  return {
    type: EDIT_GOOD,
    id
  }
}
export function keepGood(data) {
  return {
    type: KEEP_GOOD,
    data
  }
}



