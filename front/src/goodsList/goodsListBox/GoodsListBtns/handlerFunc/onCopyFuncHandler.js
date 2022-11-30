
export function onCopyFuncHandler(goods) {
  if (!goods) {
    return ''
  }
  const goodsList = goods.map((good) => {
    return `${good.info.textGood} ${good.info.numberGood || ''} ${good.info.unitGood}`
  })

  const goodsListForCopy = goodsList.join('\n')
  console.log('goodsListForCopy>>>', goodsListForCopy)


  navigator.clipboard.writeText(goodsListForCopy)
      .then(() => {
        console.log('ok')
      })
      .catch(err => {
        console.log('Something went wrong', err);
      })

  return goodsListForCopy
}
