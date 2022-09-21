import {
  SHOW_ERROR,
  HIDE_ERROR
} from "../types.js"

export function showError(massage) {
  return {
    type: SHOW_ERROR,
    massage
  }
}
export function hideError() {
  return {
    type: HIDE_ERROR
  }
}