import React from "react"
import styles from './GoodsListInput.module.scss'
import InputRadioBtns from './InputRadioBtns'

function InputNumber(props) {
  const newText = React.createRef()
  const id = `${styles.inputNumber}`
  const newGood = props.store.getNewGood()
  
  const onChangeHandler = () => {
    const value = newText.current.value
    const action = {
      type: 'UPDATE-ADD-INPUT',
      subtype: 'NUMBER',
      newInput: value,
      parantsId: id
    }
    props.dispatch(action)
  }
  return (
    <>
      <div className={`${styles.InputNumber}`}>
        <input 
            ref={newText}
            id={id} 
            value={newGood.number}
            type='text' 
            placeholder='1.0'  
            onChange={onChangeHandler}
            maxLength='4'/>
        <InputRadioBtns dispatch={props.dispatch}/>
      </div>
    </>
  )
}

export default InputNumber