import {
  SHOW_BTNS,
  SHOW_REGISTER_FIELD,
  SHOW_AUTH_FIELD,
  SHOW_WELCOME_FIELD,
} from '../types.js'

const initialState = {
  stateEnter: 'showBtns'
}

export const enterReducer = (state = initialState, action) => {
  if (action.type === SHOW_BTNS) {
    return {
      ...state,
      stateEnter: action.enter
    }
  }

  if (action.type === SHOW_REGISTER_FIELD) {
    return {
      ...state,
      stateEnter: action.enter
    }
  }
  if (action.type === SHOW_AUTH_FIELD) {
    return {
      ...state,
      stateEnter: action.enter
    }
  }
  if (action.type === SHOW_WELCOME_FIELD) {
    return {
      ...state,
      stateEnter: action.enter
    }
  }

  return state
}


