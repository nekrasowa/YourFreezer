import React from 'react'
import styles from './GoodsListElements.module.scss'

function BtnEdit(props) {
  const clickHandler = () => {
    props.showBody('edit', props.id)
  }
  return (
    <div 
      className={`${styles.element} ${styles.icon} ${styles.edit}`}
      onClick={clickHandler}
    ></div>
  )
}

export default BtnEdit