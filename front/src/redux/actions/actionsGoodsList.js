import { 
  CREATE_GOOD,
  LOADING_GOODS,
  DELETE_ONE
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
