import React from "react"
import styles from './GoodsListInput.module.scss'
import InputRadioBtns from './InputRadioBtns'

function InputNumber(props) {
  const newText = React.createRef()
  const id = `${styles.inputNumber}`
  
  return (
    <>
      <div className={`${styles.InputNumber}`}>
        <input 
            ref={newText}
            id={id} 
            value={''}
            type='text' 
            placeholder='1.0'  
            onChange={null}
            maxLength='4'/>
        <InputRadioBtns />
      </div>
    </>
  )
}

export default InputNumber