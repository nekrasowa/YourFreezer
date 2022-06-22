import React  from 'react'
import BtnDelete from './LE-BtnDelete'
import InputCheckbox from './LE-InputCheckbox'
import InputText from './LE-InputText'
import BtnEdit from './LE-BtnEdit'
import BtnTick from './LE-BtnTick'
import Pelement from './LE-Pelement'
import styles from './GoodsListElements.module.scss'

function ListElement(props) {
  const id = props.id ? props.id : Date.now() 
  
  function ToView(props) {
    return ( 
      <>
        <Pelement 
          text={props.text} 
          isChecked={props.isChecked}/>
        <BtnEdit />
      </>
    )
  }
  function ToModify(props) {
    return ( 
      <>
        <InputText 
          inputText={props.inputText}
          metodList={props.metodList}/>
        <BtnTick 
          metodList={props.metodList}/>
      </>
    )
  }

  function ModifyOrView(props) {
    if (true) {
      return (
        <>
          <ToView 
            text={props.text}
            isChecked={props.isChecked}/>
        </>)
    }
    return (
      <>
        <ToModify 
          inputText={props.inputText}
          metodList={props.metodList}/>
      </>)
    
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
        <ModifyOrView 
          inputText={props.inputText}
          metodList={props.metodList}
          text={props.text}
          isChecked={props.isChecked}
        />
        <BtnDelete parentsId={id} delete={props.metodList.delete}/> 
      </div>
    </>
  )
}

export default ListElement

