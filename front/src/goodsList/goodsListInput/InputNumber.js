import React from "react"
import './goodsListInput.scss'
import InputRadioBtns from './InputRadioBtns'

function InputNumber() {
  return (
    <>
      <div className='InputNumber'>
        <input id='inputNumber' type='text' placeholder='1.0'  maxLength='4'/>
        <InputRadioBtns />
      </div>
    </>
  )
}

export default InputNumber