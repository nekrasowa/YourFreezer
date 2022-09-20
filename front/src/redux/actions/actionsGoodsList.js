import {
  CREATE_GOOD,
  LOADING_GOODS,
  DELETE_ONE,
  CHECKED,
  EDIT_GOOD,
  KEEP_GOOD,
  INIT_GOODS
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



