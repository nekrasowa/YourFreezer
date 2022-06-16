import React  from 'react'
import BtnDelete from './LEBtnDelete'
import styles from './GoodsListElements.module.css'
import check from './checkbox.module.css'

function ListElement(props) {
  const id = props.id ? props.id : Date.now() 
  const text = props.text 
  
  const checkboxStyle = {opacity: 0, display: 'none'}

  return (
    <>
      <div 
        className={`${styles.ListElement}`} 
        id={id} 
        >
        <input 
          className={`${styles.element} ${check.checkbox}`} 
          name={`check${id}`} 
          value='no' 
          type='checkbox' 
          id={`${check.check}${id}`} 
          style={checkboxStyle}
          onClick={null}           
        />
        <label className={`${styles.element}`} htmlFor={`${check.check}${id}`}></label>
        <p className={`${styles.element} ${styles.text}`}>{text}</p>
        <div className={`${styles.element} ${styles.icon} ${styles.edit}`}></div>
      <BtnDelete parentId={id} deleteElementOfList={props.deleteElementOfList}/> 
      </div>
    </>
  )
}

export default ListElement

