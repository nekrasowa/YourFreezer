import React from 'react'
import styles from './GoodsListElements.module.scss'
import check from './checkbox.module.css'

function InputCheckbox(props) {
  const checkboxStyle = {opacity: 0, display: 'none'}
// console.log(props)
  const id = props.id
  const isChecked = props.isChecked
  const checkHandler = props.check

  function inputHandler() {
    checkHandler(id)
  }

  return (
    <>
      <input 
        className={`${styles.element} ${check.checkbox}`} 
        name={`check${id}`} 
        value='no' 
        type='checkbox' 
        id={`check${id}`} 
        style={checkboxStyle}
        onClick={null}
        onChange={inputHandler}
        checked={isChecked}
        />
      <label 
        className={`${styles.element}`} 
        htmlFor={`check${id}`}
        checked={isChecked}

        >
      </label>
     </>   
  )
}

export default InputCheckbox