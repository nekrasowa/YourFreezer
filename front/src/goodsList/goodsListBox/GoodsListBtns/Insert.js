import React from 'react'
import styles from './GoodsListBtns.module.css'

function Insert() {
  return (        
    <div className={`${styles.Insert}`}>
      <button type='button' id={`${styles.InsertBtn}`}></button>
    </div>  
    )
}

export default Insert