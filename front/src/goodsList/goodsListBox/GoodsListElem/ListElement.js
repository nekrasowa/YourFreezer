import React  from 'react'
import BtnDelete from './LE-BtnDelete'
import InputCheckbox from './LE-InputCheckbox'
import ChangeInput from './LE-ChangeInput'
import BtnEdit from './LE-BtnEdit'
import BtnTick from './LE-BtnTick'
import Pelement from './LE-Pelement'
import styles from './GoodsListElements.module.scss'

function ListElement(props) {
  const id = props.id ? props.id : Date.now() 

  function ModifyOrView(props) {
    console.log('[propsModifyOrView]:', props)
    if (props.props.wasClickedEdit) {
      return (
        <>
          <ToView 
            id={props.props.id}
            text={props.props.text}
            number={props.props.number}
            unit={props.props.unit}
            isChecked={props.props.isChecked}
            dispatch={props.props.dispatch}
            />
        </>)
    }
    return (
      <>
        <ToModify 
          id={props.props.id}
          change={props.props.change}
          dispatch={props.props.dispatch}
        />
      </>)
  }

  function ToView(props) {
    return ( 
      <>
        <Pelement 
          text={props.text}
          number={props.number}
          unit={props.unit}
          isChecked={props.isChecked}/>
        <BtnEdit 
          text={props.text}
          id={props.id}
          dispatch={props.dispatch} />
      </>
    )
  }
  function ToModify(props) {
console.log('[propsToModify]:', props)

    return ( 
      <>
        <ChangeInput 
          id={id}
          change={props.change}
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
        id={id}
        key={id}>
        <InputCheckbox 
          id={id} 
          isChecked={props.isChecked}
          dispatch={props.dispatch}
        />
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

