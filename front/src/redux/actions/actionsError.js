import {
  SHOW_ERROR,
  HIDE_ERROR
} from "../types.js"

export function showError(message) {
  return {
    type: SHOW_ERROR,
    message
  }
}
export function hideError() {
  return {
    type: HIDE_ERROR
  }
}