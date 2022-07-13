import React from 'react'
import styles from './GoodsListInput.module.scss'
import './add.svg'
import { useDispatch, useSelector } from 'react-redux'

function InputAddBtn(props) {


  const dispatch = useDispatch()

  const handleAdd = (e) => {
    e.preventDefault()
    dispatch(addGood(date, id))
  }
  return (
    <>
      <div className={`${styles.InputAddBtn}`}>
        <button 
          type='button' 
          id={`${styles.addBtn}`} 
          onClick={handleAdd}>
        </button>
      </div>
    </>
  )
}

export default InputAddBtn
