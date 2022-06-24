import { rerenderEntireTree } from './render'

export const state = {
  goods: [
    {id: 1, text: 'bananas', isChecked: false, wasClickedEdit: true, inputText: ''},
    {id: 2, text: 'apple', isChecked: false, wasClickedEdit: true, inputText: ''},
    {id: 3, text: 'meat', isChecked: false, wasClickedEdit: true, inputText: ''},
    {id: 4, text: 'pork', isChecked: true, wasClickedEdit: true, inputText: ''},
  ],
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
function updateInputValue(parantsId, newInput) {
  const elem = findGoodById(parantsId, { isElement: true })
  elem.inputText = newInput

  rerenderEntireTree(state, metodList)
}
function showGoodBody(btn, parantsId) {
  const elem = findGoodById(parantsId, { isElement: true })

  if (btn === 'tick') {
    elem.wasClickedEdit = true
  }
  if (btn === 'edit') {
    elem.wasClickedEdit = false
  }
  if (!btn) {
    throw new Error('ERR_SOME_ERROR')
  }
  rerenderEntireTree(state, metodList)

}
