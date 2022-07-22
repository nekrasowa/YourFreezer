import React, { useState } from 'react'
import styles from '../GoodsListElements.module.scss'
import check from '../checkbox.module.css'
import { useDispatch } from 'react-redux'
import { chackedGood } from '../../../../redux/actions/actionsGoodsList'

function CheckBox(props) {
  const checkboxStyle = {opacity: 0, display: 'none'}
  const id = props.id
  const isChacked = props.isChacked
  const dispatch = useDispatch()

  const [isCheck, setIsCheck] = useState(false)
  // console.log('[states]:', isCheck)

  const onChangeHandler = () => {
    dispatch(chackedGood(id))
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
        checked={isChacked}
        />
      <label 
        className={`${styles.element}`} 
        htmlFor={`check${id}`}
        checked={isChacked}
        >
      </label>
    </>
  )
}

export default CheckBox