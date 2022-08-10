import {
  LOADER_ON,
  LOADER_OFF
} from "../types.js"

export function loaderOn() {
  return {
    type: LOADER_ON,
  }
}
export function loaderOff() {
  return {
    type: LOADER_OFF,
  }
}
