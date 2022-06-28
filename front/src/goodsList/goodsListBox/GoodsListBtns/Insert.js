import React from 'react'
import styles from './GoodsListBtns.module.scss'

function Insert() {
  return (        
    <div className={`${styles.Insert}`}>
      <button type='button' id={`${styles.InsertBtn}`}></button>
    </div>  
    )
}

export default Insert