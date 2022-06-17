import React  from 'react'
import BtnDelete from './LEBtnDelete'
import InputCheckbox from './LEInput'
import styles from './GoodsListElements.module.css'

function ListElement(props) {
  const id = props.id ? props.id : Date.now() 
  const text = props.text 

  return (
    <>
      <div 
        className={`${styles.ListElement}`} 
        id={id}>
        <InputCheckbox parentsId={id} isChecked={props.isChecked}/>
        <p 
          className={`${styles.element} ${styles.text}`}>
          {text}
        </p>
        <div 
          className={`${styles.element} ${styles.icon} ${styles.edit}`}>
        </div>
        <BtnDelete parentsId={id} deleteElementFromList={props.deleteElementFromList}/> 
      </div>
    </>
  )
}

export default ListElement

