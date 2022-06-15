import React from "react"
import styles from './GoodsListInput.module.scss'

function InputText() {

  // const inputText = React.createRef()

  // const textOfGood = inputText.current.value


  return (
    <>
      <div className={`${styles.InputText}`}>
        <input 
          // ref={inputText}
          id={`${styles.listText}`} 
          type='text' 
          autoFocus 
          placeholder='Add goods'/>
      </div>
    </>
  )
}

export default InputText