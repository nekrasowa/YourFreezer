import React from "react"
import './goodsListInput.scss'

function InputText() {
  return (
    <>
      <div className='InputText'>
        <input id='listText' type='text' autoFocus placeholder='Add goods'/>
      </div>
    </>
  )
}

export default InputText