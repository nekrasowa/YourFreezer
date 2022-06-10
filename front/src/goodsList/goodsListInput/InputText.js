import React from "react"
import styles from './GoodsListInput.module.scss'

function InputText() {
  return (
    <>
      <div className={`${styles.InputText}`}>
        <input id={`${styles.listText}`} type='text' autoFocus placeholder='Add goods'/>
      </div>
    </>
  )
}

export default InputText