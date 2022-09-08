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
      error: { massage: action.massage }
    }
  }
  console.log('initialState', initialState)

  if (action.type === HIDE_ERROR) {
  console.log('hide2')

    return {
      ...state,
      error: {}
    }
  }

  return state
}
