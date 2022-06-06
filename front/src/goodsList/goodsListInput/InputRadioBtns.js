import React from 'react'
import './goodsListInput.scss'

function InputRadioBtns() {
  return (
    <>
      <div className='InputRadioBtns'>
      <div class='container'>
        <form>
          <label>
            <input type='radio' name='radio' checked/>
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
