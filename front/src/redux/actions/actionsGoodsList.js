import { 
  // DELETE_ONE, 
  // SHOW_BODY,
  // CHECK,
  COPY,
  DELETE_ALL,
  // INSERT,
  ADD
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

export function addGood() {
  return {
    type: ADD

  }
}

