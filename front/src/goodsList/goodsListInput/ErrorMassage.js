import React from 'react'
import styles from './GoodsListInput.module.scss'

function ErrorMassage(props) {

  return (
    <div className={`${styles.ErrorMassage} ${styles.ErrorMassageColor}`}>
        <p>{props.massage}</p>
      </div>
  )
}

export default ErrorMassage
