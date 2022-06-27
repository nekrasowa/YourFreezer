import React from 'react'
import styles from './GoodsListElements.module.scss'

function BtnTick(props) {
  // console.log(props.id)
  const clickHandler = () => {
    const action = {
      type: 'SHOW-BODY',
      parantsId: props.id,
      btn: 'tick'
    }
    props.dispatch(action)    
  }
  return (
    <div 
      className={`${styles.element} ${styles.icon} ${styles.tick}`}
      onClick={clickHandler}
    ></div>
  )
}

export default BtnTick
