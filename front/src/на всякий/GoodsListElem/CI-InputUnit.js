import React from 'react'
import styles from './GoodsListElements.module.scss'

function InputUnit(props) {
  const newNumber = React.createRef()

  const onChangeHandler = () => {
    const value = newNumber.current.value
    const action = {
      type: 'UPDATE-EDIT-INPUT',
      subtype: 'UNIT',
      newInput: value,
      parantsId: props.id
    }
    props.dispatch(action)

  }
  return (
      <input 
        className={styles.inputUnit}
        onChange={onChangeHandler}
        ref={newNumber}
        // value={null}
        // autoFocus={true}

      />
    )
}

export default InputUnit