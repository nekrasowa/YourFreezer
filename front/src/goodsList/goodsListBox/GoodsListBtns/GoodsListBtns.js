import React from 'react'
import styles from './GoodsListBtns.module.scss'
import Insert from './Insert'
import Copy from './Copy'
import Delete from './Delete'

function GoodsListBtns(props) {

  return (
      <div className={`${styles.GoodsListBtns}`}> 
        <Insert />
        <Copy />
        <Delete />
      </div>
  )
}

export default GoodsListBtns