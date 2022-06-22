import React from 'react'
import styles from './GoodsListElements.module.scss'

function BtnTick(props) {
  
  const clickHandler = () => {
    props.showBody('tick')
    
  }

  return (
    <div 
      className={`${styles.element} ${styles.icon} ${styles.tick}`}
      onClick={clickHandler}

    ></div>
  )
}

export default BtnTick
