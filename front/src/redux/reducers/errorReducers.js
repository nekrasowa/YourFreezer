import {
  SHOW_ERROR,
  HIDE_ERROR
} from '../types'

const initialState = {
  error: {}
}

export const errorReducer = (state = initialState, action) => {
  if (action.type === SHOW_ERROR) {
    return {
      ...state,
      error: { message: action.message }
    }
  }
  if (action.type === HIDE_ERROR) {
    return {
      ...state,
      error: {}
    }
  }

  return state
}
