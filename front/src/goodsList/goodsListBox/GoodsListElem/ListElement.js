import React  from 'react'
import BtnDelete from './LE-BtnDelete'
import InputCheckbox from './LE-InputCheckbox'
import InputText from './LE-InputText'
import BtnEdit from './LE-BtnEdit'
import BtnTick from './LE-BtnTick'
import Pelement from './LE-Pelement'
import styles from './GoodsListElements.module.css'

function ListElement(props) {
  const id = props.id ? props.id : Date.now() 
  
  function ToView() {
    return ( 
      <>
        <Pelement 
          text={props.text} 
          isChecked={props.isChecked}/>
        <BtnEdit />
      </>
    )
  }
  function ToModify() {
    return ( 
      <>
        <InputText />
        <BtnTick />
      </>
    )
  }
  

  return (
    <>
      <div
        className={`${styles.ListElement}`} 
        id={id}>
        <InputCheckbox 
          parentsId={id} 
          isChecked={props.isChecked}
          check={props.metodList.check}/>
        <ToView />
        <BtnDelete parentsId={id} delete={props.metodList.delete}/> 
      </div>
    </>
  )
}

export default ListElement

