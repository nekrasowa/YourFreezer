import React, { useState } from 'react'
import styles from '../GoodsListElements.module.scss'
import check from '../checkbox.module.css'
import { useDispatch } from 'react-redux'
import { checkedGood } from '../../../../redux/thunks/checkedGood'

function CheckBox(props) {
  const checkboxStyle = {opacity: 0, display: 'none'}
  const id = props.id
  const isChecked = props.isChecked
  const dispatch = useDispatch()

  const [isCheck, setIsCheck] = useState(isChecked)
  const onChangeHandler = () => {
    dispatch(checkedGood(id))
    setIsCheck(!isCheck)
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
        onChange={onChangeHandler}
        defaultChecked={isCheck}
        />
      <label 
        className={`${styles.element}`} 
        htmlFor={`check${id}`}
        type='checkbox'
        defaultChecked={isCheck}
        >
      </label>
    </>
  )
}

export default CheckBox