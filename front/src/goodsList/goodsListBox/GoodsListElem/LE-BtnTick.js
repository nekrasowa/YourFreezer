import React from 'react'
import styles from './GoodsListElements.module.scss'

function BtnTick(props) {
  // console.log(props.id)
  const clickHandler = () => {
    props.showBody('tick', props.id)    
  }
  return (
    <div 
      className={`${styles.element} ${styles.icon} ${styles.tick}`}
      onClick={clickHandler}
    ></div>
  )
}

export default BtnTick
