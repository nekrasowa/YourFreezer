import React from 'react'
import styles from './GoodsListElements.module.css'

function BtnEdit(props) {
  
  return (
    <div 
      className={`${styles.element} ${styles.icon} ${styles.edit}`}
      onClick={null}
    ></div>
  )
}

export default BtnEdit