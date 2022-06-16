import { rerenderEntireTree } from './render'


export const goods = [
  {id: 1, text: 'bananas'},
  {id: 2, text: 'apple'},
  {id: 3, text: 'meat'},
  {id: 4, text: 'pork'},
  
]

export function deleteElementFromList(parantId) {
  console.log('[elementOfGoodsId]:', parantId)

  const findId = (elem) => {
    if (elem.id === parantId) {
      return parantId
    }
    return undefined
  }

  const indexOfGoods = goods.findIndex(findId)
  console.log('[indexOfGoods]:', indexOfGoods)
  
  goods.splice(indexOfGoods, 1)

  console.log('[goods]:', goods)

  rerenderEntireTree(goods, deleteElementFromList)

}


