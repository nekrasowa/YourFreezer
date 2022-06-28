import React from 'react'
import styles from './GoodsListBtns.module.scss'
import Insert from "./Insert"
import Copy from "./Copy"
import Delete from "./Delete"


function GoodsListBtns(props) {

  return (
      <div className={`${styles.GoodsListBtns}`}> 
        <Insert />
        <Copy
          copyText={props.copyText}
          dispatch={props.dispatch}
        />
        <Delete 
          dispatch={props.dispatch}
        />
      </div>
  )
}

export default GoodsListBtns