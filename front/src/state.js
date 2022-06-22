import { rerenderEntireTree } from './render'

export const state = {
  goods: [
    {id: 1, text: 'bananas', isChecked: false},
    {id: 2, text: 'apple', isChecked: false},
    {id: 3, text: 'meat', isChecked: false},
    {id: 4, text: 'pork', isChecked: true},
  ],
  inputText: ''
}

export const metodList = {
  delete: deleteElementFromList,
  check: checkChangeHandler,
  // change: changeTextElement,
  update: updateInputValue
}

const findGoodById = (parantsId, opts = {}) => {
  const {
    isIndex = false,
    isElement = false
  } = opts || {}

  const findId = (elem) => {
    if (elem.id === parantsId) {
      return parantsId
    }
    return undefined
  }

  if (isIndex) {
    return state.goods.findIndex(findId)
  }
  if (isElement) {
    return state.goods.find(findId)
  }
 
  throw new Error('ERR_SOME_ERROR')
}

function deleteElementFromList(parantsId) {
  const index = findGoodById(parantsId, { isIndex: true })
  state.goods.splice(index, 1)
  rerenderEntireTree(state, metodList)
}

function checkChangeHandler(parantsId) {
  const elem = findGoodById(parantsId, { isElement: true })
  elem.isChecked = !elem.isChecked

  rerenderEntireTree(state, metodList)
}

// function changeTextElement(input) {
//   console.log('[input]:', input)
  
//   return input
// }

function updateInputValue(newInput) {
  state.inputText = newInput

  rerenderEntireTree(state, metodList)
}
// console.log('[newText]:', newText)
