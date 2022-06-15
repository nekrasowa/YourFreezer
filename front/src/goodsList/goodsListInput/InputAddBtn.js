import React from 'react'
import styles from './GoodsListInput.module.scss'
import './add.svg'
import GoodsListElements from '../GoodsListBox/GoodsListElem/GoodsListElements.js'

function InputAddBtn() {
  return (
    <>
      <div className={`${styles.InputAddBtn}`}>
        <button 
          type='button' 
          id={`${styles.addBtn}`} 
          onClick={GoodsListElements}></button>
      </div>
    </>
  )
}

export default InputAddBtn
