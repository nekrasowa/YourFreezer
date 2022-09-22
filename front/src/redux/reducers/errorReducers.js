import {
  SHOW_ERROR,
  HIDE_ERROR
} from '../types'

const initialState = {
  error: {}
}

export const errorReducer = (state = initialState, action) => {
  console.log('[initialState]:', initialState)
  if (action.type === SHOW_ERROR) {
    return {
      ...state,
      error: { massage: action.massage }
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
