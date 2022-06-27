import React from 'react'
import styles from './GoodsListElements.module.scss'

function BtnEdit(props) {
  const clickHandler = () => {
    const action = {
      type: 'SHOW-BODY',
      parantsId: props.id,
      btn: 'edit'
    }
    props.dispatch(action)
  }
  return (
    <div 
      className={`${styles.element} ${styles.icon} ${styles.edit}`}
      onClick={clickHandler}
    ></div>
  )
}

export default BtnEdit