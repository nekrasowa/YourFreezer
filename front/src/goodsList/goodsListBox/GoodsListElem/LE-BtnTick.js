import React from 'react'
import styles from './GoodsListElements.module.css'

function BtnTick(props) {
  
  return (
    <div 
      className={`${styles.element} ${styles.icon} ${styles.tick}`}
      onClick={null}

    ></div>
  )
}

export default BtnTick
