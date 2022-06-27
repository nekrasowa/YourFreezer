import React  from 'react'
import BtnDelete from './LE-BtnDelete'
import InputCheckbox from './LE-InputCheckbox'
import InputText from './LE-InputText'
import BtnEdit from './LE-BtnEdit'
import BtnTick from './LE-BtnTick'
import Pelement from './LE-Pelement'
import styles from './GoodsListElements.module.scss'

function ListElement(props) {

  // console.log(props)
  const id = props.id ? props.id : Date.now() 

  function ModifyOrView(props) {

    if (props.props.wasClickedEdit) {
      return (
        <>
          <ToView 
            id={props.props.id}
            text={props.props.text}
            isChecked={props.props.isChecked}
            dispatch={props.props.dispatch}
            />
        </>)
    }
    return (
      <>
        <ToModify 
          id={props.props.id}
          inputText={props.props.inputText}
          dispatch={props.props.dispatch}
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
          text={props.text}
          id={props.id}
          dispatch={props.dispatch} />
      </>
    )
  }
  function ToModify(props) {
    return ( 
      <>
        <InputText 
          id={id}
          inputText={props.inputText}
          dispatch={props.dispatch}/>
        <BtnTick 
          id={id}
          dispatch={props.dispatch} />
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
          dispatch={props.dispatch}/>
        <ModifyOrView 
          props={props}
        />
        <BtnDelete 
          id={id} 
          dispatch={props.dispatch}
        /> 
      </div>
    </>
  )
}

export default ListElement

