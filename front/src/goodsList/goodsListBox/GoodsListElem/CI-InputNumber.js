import React from 'react'
import styles from './GoodsListElements.module.scss'

function InputNumber(props) {
  const newNumber = React.createRef()
  const onChangeHandler = () => {
    const value = newNumber.current.value
    const action = {
      type: 'UPDATE-EDIT-INPUT',
      subtype: 'NUMBER',
      newNumber: value,
      parantsId: props.id
    }
    props.dispatch(action)
  }
  return (
      <input 
        className={styles.inputNumber}
        onChange={onChangeHandler}
        ref={newNumber}
        value={props.change.inputNumber}
        autoFocus
      />
    )
}

export default InputNumber