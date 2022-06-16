export const goods = [
  {id: 1, text: 'bananas'},
  {id: 2, text: 'apple'},
  {id: 3, text: 'meat'},
  {id: 4, text: 'pork'},
  
]

export function deleteElementFromList(id) {
  console.log('[elementOfGoods]:', id)

  const findId = (elem) => elem.id = id

  const indexOfGoods = goods.findIndex(findId)
  console.log('[indexOfGoods]:', indexOfGoods)
  
  goods.splice(indexOfGoods, 1)

  console.log('[goods]:', goods)

}


