import React  from 'react'
import BtnDelete from './LE-BtnDelete'
import InputCheckbox from './LE-InputCheckbox'
import InputText from './LE-InputText'
import BtnEdit from './LE-BtnEdit'
import BtnTick from './LE-BtnTick'
import Pelement from './LE-Pelement'
import styles from './GoodsListElements.module.scss'

function ListElement(props) {
  console.log(props)
  const id = props.id ? props.id : Date.now() 

  function ModifyOrView(props) {
    if (props.props.wasClickedEdit) {
      return (
        <>
          <ToView 
            id={props.props.id}
            text={props.props.text}
            isChecked={props.props.isChecked}
            showBody={props.props.metodList.showBody}
            />
        </>)
    }
    return (
      <>
        <ToModify 
          id={props.props.id}
          inputText={props.props.inputText}
          metodList={props.props.metodList}
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
          id={props.id}
          showBody={props.showBody} />
      </>
    )
  }
  function ToModify(props) {
    console.log('[props]:', props)

    return ( 
      <>
        <InputText 
          id={id}
          inputText={props.inputText}
          metodList={props.metodList}/>
        <BtnTick 
          id={id}
          showBody={props.metodList.showBody} />
      </>
    )
  }
  return (
    <>
      <div
        className={`${styles.ListElement}`} 
        id={id}>
        <InputCheckbox 
          id={id} 
          isChecked={props.isChecked}
          check={props.metodList.check}/>
        <ModifyOrView 
          props={props}
        />
        <BtnDelete 
          id={id} 
          delete={props.metodList.delete}
        /> 
      </div>
    </>
  )
}

export default ListElement

