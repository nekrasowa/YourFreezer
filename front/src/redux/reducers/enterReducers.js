import {
  SHOW_BTNS,
  SHOW_REGISTER_FIELD,
  SHOW_AUTH_FIELD,
  SHOW_WELCOME_FIELD,
  MASSAGE_FOR_USER,
  PERMISSION_TO_CHANGE,
} from '../types.js'

const initialState = {
  stateEnter: 'showBtns',
  massage: '',
  isRequestSuccessful: true
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

  if (action.type === MASSAGE_FOR_USER) {
    return {
      ...state,
      massage: action.massage
    }
  }
  if (action.type === PERMISSION_TO_CHANGE) {
    return {
      ...state,
      isRequestSuccessful: action.successful
    }
  }

  return state 
}


