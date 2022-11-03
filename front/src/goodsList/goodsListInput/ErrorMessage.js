import React from 'react'
import styles from './GoodsListInput.module.scss'

function ErrorMessage(props) {

  return (
    <div className={`${styles.ErrorMessage} ${styles.ErrorMessageColor}`}>
        <p>{props.message}</p>
      </div>
  )
}

export default ErrorMessage
