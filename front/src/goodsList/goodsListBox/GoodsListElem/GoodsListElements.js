import React from 'react'
import styles from './GoodsListElements.module.scss'
import ListElement from './ListElement'
import { useSelector } from 'react-redux'

function GoodsListElements(props) {

  const goods = useSelector(state => state.createGood.goods)

  const list = goods.map(good => <ListElement goodInfo={good} key={good.info.id}/>)
  return (
    <div className={`${styles.BoxElements}`}>
      {list}
    </div>
  )
}

export default GoodsListElements
