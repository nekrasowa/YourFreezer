import React, { useState } from 'react'
import styles from '../GoodsListElements.module.scss'
import check from '../checkbox.module.css'


function CheckBox(props) {
  const checkboxStyle = {opacity: 0, display: 'none'}
  const id = 0

  const [isCheck, setIsCheck] = useState(true)
  console.log('[state]:', isCheck)

  const onChangeHandler = () => setIsCheck(!isCheck)
  return (
    <>
      <input 
        className={`${styles.element} ${check.checkbox}`} 
        name={`check${id}`} 
        value='no' 
        type='checkbox' 
        id={`check${id}`} 
        style={checkboxStyle}
        onChange={onChangeHandler}
        checked={null}
        />
      <label 
        className={`${styles.element}`} 
        htmlFor={`check${id}`}
        checked={null}
        >
      </label>
    </>
  )
}

export default CheckBox