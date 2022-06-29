import React from "react"
import styles from './GoodsListInput.module.scss'

function InputText(props) {
  const newText = React.createRef()
  const id = `${styles.listText}`
  
  const onChangeHandler = () => {
    const value = newText.current.value
    const action = {
      type: 'UPDATE-ADD_INPUT',
      subtype: 'TEXT',
      newInput: value,
      parantsId: id
    }
    props.dispatch(action)
  }

  return (
    <>
      <div className={`${styles.InputText}`}>
        <input 
          id={id} 
          ref={newText}
          type='text' 
          autoFocus 
          placeholder='Add goods'
          onChange={onChangeHandler}
          />
      </div>
    </>
  )
}

export default InputText