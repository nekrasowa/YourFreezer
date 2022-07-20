import { 
  // DELETE_ONE, 
  // SHOW_BODY,
  // CHECK,
  COPY,
  DELETE_ALL,
  // INSERT,
  CREATE_GOOD, 
 } from "../types.js"

export function deleteAllGoods() {
  return {
    type: DELETE_ALL
  }
}
export function copyGoods() {
  return {
    type: COPY
  }
}

export function createGood(data) {
  return {
    type: CREATE_GOOD,   
    data
  }
}

