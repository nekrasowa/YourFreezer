import React from 'react'
import styles from './GoodsListInput.module.scss'
import './add.svg'

function InputAddBtn() {
  return (
    <>
      <div className={`${styles.InputAddBtn}`}>
        <button 
          type='button' 
          id={`${styles.addBtn}`} 
          onClick={null}></button>
      </div>
    </>
  )
}

export default InputAddBtn
