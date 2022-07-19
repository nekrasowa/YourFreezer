import React from "react"
import styles from './GoodsListInput.module.scss'

function InputText(props) {
  // const newText = React.createRef()
  const id = `${styles.listText}`
  
  return (
    <>
      <div className={`${styles.InputText}`}>
        <input 
          id={id} 
          // ref={newText}
          type='text' 
          // value={}
          autoFocus 
          placeholder='Add goods'
          onChange={null}
          />
      </div>
    </>
  )
}

export default InputText