import React from 'react'
import styles from '../GoodsListBtns.module.scss'

function RowOfTable(props) {

  return (
    <div className={`${styles.RowOfTable}`}>
      <div name={'name'} className={`${styles.nameOfGood}`}> {props.name}</div>
      
        <input
          className={`${styles.checkbox} ${styles.checkbox_basic}`}
          type='radio' />
        <input
          className={`${styles.checkbox} ${styles.checkbox_vegFrut}`}
          type='radio' />
        <input
          className={`${styles.checkbox} ${styles.checkbox_freezer}`}
          type='radio' />

    </div>
  )
}

export default RowOfTable