import React from 'react'
import styles from './GoodsListElements.module.css'
import ListElement from './ListElement'

function GoodsListElements(props) {
  return (
      <div className={`${styles.BoxElements}`}>
        <ListElement goods={props.goods}/>
        

      </div>
  )
}

export default GoodsListElements