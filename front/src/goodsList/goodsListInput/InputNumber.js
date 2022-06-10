import React from "react"
import styles from './GoodsListInput.module.scss'
import InputRadioBtns from './InputRadioBtns'

function InputNumber() {
  return (
    <>
      <div className={`${styles.InputNumber}`}>
        <input id={`${styles.inputNumber}`} type='text' placeholder='1.0'  maxLength='4'/>
        <InputRadioBtns />
      </div>
    </>
  )
}

export default InputNumber