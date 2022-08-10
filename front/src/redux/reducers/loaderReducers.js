import {
  LOADER_ON,
  LOADER_OFF
} from "../types.js"

const initialState = {isTurned: false}

export const loaderReducer = (state = initialState, action) => {
  if(action.type === LOADER_ON) {
    return {
    ...state,
    isTurned: true
    }
  }
  if(action.type === LOADER_OFF) {
    return {
      ...state,
      isTurned: false
      }
  }
  return state
}
