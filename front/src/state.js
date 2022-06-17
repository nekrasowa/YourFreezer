import { rerenderEntireTree } from './render'


export const goods = [
  {id: 1, text: 'bananas', isChecked: false},
  {id: 2, text: 'apple', isChecked: false},
  {id: 3, text: 'meat', isChecked: false},
  {id: 4, text: 'pork', isChecked: true},
  
]

const findIndexOfGoods = (parantsId) => {

  const findId = (elem) => {
    if (elem.id === parantsId) {
      return parantsId
    }
    return undefined
  }

  return goods.findIndex(findId)
}

export function deleteElementFromList(parantsId) {
  // console.log('[elementOfGoodsId]:', parantsId)

  const index = findIndexOfGoods(parantsId)
  // console.log('[index]:', index)
  
  goods.splice(index, 1)

  rerenderEntireTree(goods, deleteElementFromList)
}

export function changeHandler(parantsId) {
  console.log('[elementOfGoodsId]:', parantsId)

  const elem = goods.find((elem) => goods.id === parantsId)

  elem.isChecked = !elem.isChecked
  console.log('[elem]:', elem)

  rerenderEntireTree(goods, deleteElementFromList)
}
