import React from 'react'
import styles from './GoodsListElements.module.scss'

function InputText(props) {
  const newText = React.createRef()
  
  const onChangeHandler = () => {
    const value = newText.current.value
    const action = {
      type: 'UPDATE',
      newInput: value,
      parantsId: props.id
    }
    props.dispatch(action)
    
  }

  return (
    <input 
      className={styles.inputText}
      ref={newText}
      value={props.inputText}
      onChange={onChangeHandler}
      autoFocus
    />
  )
}

export default InputText
