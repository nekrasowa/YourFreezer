import React from 'react'
import styles from './GoodsListElements.module.scss'
import ListElement from './ListElement'

function GoodsListElements(props) {
          
  return (
    <div className={`${styles.BoxElements}`}>
      <ListElement />
    </div>
  )
}

export default GoodsListElements
