import { rerenderEntireTree } from './render'

export const goods = [
  {id: 1, text: 'bananas', isChecked: false},
  {id: 2, text: 'apple', isChecked: false},
  {id: 3, text: 'meat', isChecked: false},
  {id: 4, text: 'pork', isChecked: true},
]

export const metodList = {
  delete: deleteElementFromList,
  check: checkChangeHandler
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
    return goods.findIndex(findId)
  }
  if (isElement) {
    return goods.find(findId)
  }
 
  throw new Error('ERR_SOME_ERROR')
}


function deleteElementFromList(parantsId) {
  // console.log('[elementOfGoodsId]:', parantsId)
  const index = findGoodById(parantsId, { isIndex: true })
  // console.log('[index]:', index)
  goods.splice(index, 1)
  rerenderEntireTree(goods, metodList)
}

function checkChangeHandler(parantsId) {
  const elem = findGoodById(parantsId, { isElement: true })
  elem.isChecked = !elem.isChecked

  rerenderEntireTree(goods, metodList)
}


