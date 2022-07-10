import React from 'react'
import styles from './GoodsListElements.module.scss'

function InputText(props) {
  const newText = React.createRef()
console.log('[props]:', props)
  const onChangeHandler = () => {
    const value = newText.current.value
    const action = {
      type: 'UPDATE-EDIT-INPUT',
      subtype: 'TEXT',
      newInput: value,
      parantsId: props.id
    }
    props.dispatch(action)

  }
  return (
      <input 
        className={styles.inputText}
        onChange={onChangeHandler}
        ref={newText}
        value={props.change.inputText}
        autoFocus
      />
    )
}

export default InputText