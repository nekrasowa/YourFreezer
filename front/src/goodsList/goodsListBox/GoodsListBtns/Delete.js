import React from 'react'
import styles from './GoodsListBtns.module.css'

function Delete() {
  return (        
    <div className={`${styles.Delete}`}>
      <button type='button' id={`${styles.DeleteBtn}`}></button>
    </div>
  )
}

export default Delete