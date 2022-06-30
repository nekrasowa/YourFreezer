import React from 'react'
import styles from './GoodsListInput.module.scss'
import './add.svg'

function InputAddBtn(props) {

  const onClickHandler = () => {
    const action = {
      type: 'ADD'
    }
    props.dispatch(action)
  }
  return (
    <>
      <div className={`${styles.InputAddBtn}`}>
        <button 
          type='button' 
          id={`${styles.addBtn}`} 
          onClick={onClickHandler}></button>
      </div>
    </>
  )
}

export default InputAddBtn
