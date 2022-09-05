import {
  SHOW_BTNS,
  SHOW_REGISTER_FIELD,
  SHOW_AUTH_FIELD,
  SHOW_WELCOME_FIELD,
} from '../types.js'

export function showEnterBtns() {
  return {
    type: SHOW_BTNS,
    enter: 'showBtns'
  }
}
export function showRegisterField() {
  return {
    type: SHOW_REGISTER_FIELD,
    enter: 'showRegisterField'
  }
}
export function showAuthField() {
  return {
    type: SHOW_AUTH_FIELD,
    enter: 'showAuthField'
  }
}
export function showWelcomeField() {
  return {
    type: SHOW_WELCOME_FIELD,
    enter: 'showWelcomeField'
  }
}


