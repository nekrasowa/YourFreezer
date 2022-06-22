import { rerenderEntireTree } from './render'

export const state = {
  goods: [
    {id: 1, text: 'bananas', isChecked: false},
    {id: 2, text: 'apple', isChecked: false},
    {id: 3, text: 'meat', isChecked: false},
    {id: 4, text: 'pork', isChecked: true},
  ],
  inputText: '',
  wasClickedEdit: true
}

export const metodList = {
  delete: deleteElementFromList,
  check: checkChangeHandler,
  update: updateInputValue,
  showBody: showGoodBody,
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
function updateInputValue(newInput) {
  state.inputText = newInput

  rerenderEntireTree(state, metodList)
}
function showGoodBody(btn) {
  console.log('[btn]:', btn)

  if (btn === 'tick') {
    state.wasClickedEdit = true
  }
  if (btn === 'edit') {
    state.wasClickedEdit = false
  }
  if (!btn) {
    throw new Error('ERR_SOME_ERROR')
  }
  console.log('[props]:', state.wasClickedEdit)
  rerenderEntireTree(state, metodList)

}

console.log('[props]:', state.wasClickedEdit)

