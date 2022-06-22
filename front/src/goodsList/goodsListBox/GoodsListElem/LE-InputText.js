import React from 'react'
import styles from './GoodsListElements.module.scss'

function InputText(props) {
  console.log(props)
  const newText = React.createRef()
  
  const onChangeHandler = () => {
    const value = newText.current.value
    // props.metodList.change(value)
    props.metodList.update(value)
  }

  return (
    <input 
      className={styles.inputText}
      ref={newText}
      value={props.inputText}
      onChange={onChangeHandler}
    />
  )
}

export default InputText