import React from 'react'
import styles from './GoodsListBtns.module.css'

function Copy() {
  return (        
    <div className={`${styles.Copy}`}>
      <button type='button' id={`${styles.CopyBtn}`}></button>
    </div>  
    )
}

export default Copy