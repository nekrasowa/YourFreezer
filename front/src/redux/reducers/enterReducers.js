import {
  SHOW_BTNS,
  SHOW_REGISTER_FIELD,
  SHOW_AUTH_FIELD,
  SHOW_WELCOME_FIELD,
  MASSAGE_FOR_NEW_USER
} from '../types.js'

const initialState = {
  stateEnter: 'showBtns',
  massage: ''
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
    console.log('here >> enterReducer',)
    console.log('initialState>>>', initialState)

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

  if (action.type === MASSAGE_FOR_NEW_USER) {
    return {
      ...state,
      massage: action.massage
    }
  }
  
  return state
  
}


