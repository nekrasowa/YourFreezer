import React from 'react'
import './GoodsListInput.scss'

function InputRadioBtns() {
  return (
    <>
      <div className='InputRadioBtns'>
      <div className='container'>
        <form>
          <label>
            <input type='radio' name='radio' defaultChecked/>
            <span>kilo</span>
          </label>
          <label>
            <input type='radio' name='radio'/>
            <span>pcs</span>
          </label>
        </form>
      </div>
      </div>
    </>
  )
}

export default InputRadioBtns
