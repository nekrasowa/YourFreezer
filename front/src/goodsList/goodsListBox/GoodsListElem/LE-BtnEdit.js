import React from 'react'
import styles from './GoodsListElements.module.scss'

function BtnEdit(props) {
  
  return (
    <div 
      className={`${styles.element} ${styles.icon} ${styles.edit}`}
      onClick={null}
    ></div>
  )
}

export default BtnEdit