import React  from 'react'
import BtnDelete from './LE-BtnDelete'
import InputCheckbox from './LE-Input'
import Pelement from './LE-Pelement'

import styles from './GoodsListElements.module.css'

function ListElement(props) {

  const id = props.id ? props.id : Date.now() 
  return (
    <>
      <div
        className={`${styles.ListElement}`} 
        id={id}>
        <InputCheckbox 
          parentsId={id} 
          isChecked={props.isChecked}
          check={props.metodList.check}/>
        <Pelement 
          text={props.text} 
          isChecked={props.isChecked}/>
        <div 
          className={`${styles.element} ${styles.icon} ${styles.edit}`}>
        </div>
        <BtnDelete parentsId={id} delete={props.metodList.delete}/> 
      </div>
    </>
  )
}

export default ListElement

