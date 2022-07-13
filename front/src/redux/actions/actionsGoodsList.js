import { 
  DELETE_ONE, 
  SHOW_BODY,
  CHECK,
  COPY,
  DELETE_ALL,
  INSERT,
  ADD
 } from "./types";

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

