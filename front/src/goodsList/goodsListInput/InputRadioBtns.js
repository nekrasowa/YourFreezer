import React from 'react'
import styles from './GoodsListInput.module.scss'

function InputRadioBtns() {
  return (
    <>
      <div className={`${styles.InputRadioBtns}`}>
      <div className={`${styles.container}`}>
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
