import React from "react"
import styles from './GoodsListElements.module.css'
import check from './checkbox.module.css'

function ListElement() {
  return (
    <>
      <div className={`${styles.ListElement}`} id='1'>
        <input className={`${styles.element} ${check.checkbox}`} 
          name='check1' 
          value='no' 
          type='checkbox' 
          id={`${check.check1}`} 
          onClick={null}           
        />
        <label className={`${styles.element}`} htmlFor={`${check.check1}`}></label>
        <p className={`${styles.element} ${styles.text}`}>text</p>
        <div className={`${styles.element} ${styles.icon} ${styles.edit}`}></div>
        <div className={`${styles.element} ${styles.icon} ${styles.delete}`}></div>
      </div>
    </>
  )
}

export default ListElement

