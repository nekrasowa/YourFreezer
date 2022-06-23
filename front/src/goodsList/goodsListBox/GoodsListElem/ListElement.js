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

  function ModifyOrView(props) {
    if (props.wasClickedEdit) {
      return (
        <>
          <ToView 
            text={props.text}
            isChecked={props.isChecked}
            showBody={props.showBody}
            />
        </>)
    }
    return (
      <>
        <ToModify 
          metodList={props.metodList}
          inputText={props.inputText}
          showBody={props.showBody}
        />
      </>)
  }

  function ToView(props) {
    return ( 
      <>
        <Pelement 
          text={props.text} 
          isChecked={props.isChecked}/>
        <BtnEdit 
          showBody={props.showBody} />
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
          showBody={props.showBody} />
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
        <ModifyOrView 
          inputText={props.inputText}
          showBody={props.metodList.showBody}
          text={props.text}
          isChecked={props.isChecked}
          wasClickedEdit={props.wasClickedEdit}
          metodList={props.metodList}
        />
        <BtnDelete parentsId={id} delete={props.metodList.delete}/> 
      </div>
    </>
  )
}

export default ListElement

