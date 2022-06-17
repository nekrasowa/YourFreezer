import { rerenderEntireTree } from './render'

export const goods = [
  {id: 1, text: 'bananas', isChecked: false},
  {id: 2, text: 'apple', isChecked: false},
  {id: 3, text: 'meat', isChecked: false},
  {id: 4, text: 'pork', isChecked: true},
]

export const listMetods = {
  delete: deleteElementFromList,
  check: checkChangeHandler
}

const findOfGoods = (parantsId, whatFind) => {

  const findId = (elem) => {
    if (elem.id === parantsId) {
      return parantsId
    }
    return undefined
  }
 
  return whatFind === 'index' 
    ? goods.findIndex(findId)
    : goods.find(findId)
}


function deleteElementFromList(parantsId) {
  // console.log('[elementOfGoodsId]:', parantsId)
  const index = findOfGoods(parantsId, 'index')
  // console.log('[index]:', index)
  goods.splice(index, 1)
  rerenderEntireTree(goods, listMetods)
}

function checkChangeHandler(parantsId) {
  const elem = findOfGoods(parantsId, 'elem')
  elem.isChecked = !elem.isChecked

  rerenderEntireTree(goods, listMetods)
}


