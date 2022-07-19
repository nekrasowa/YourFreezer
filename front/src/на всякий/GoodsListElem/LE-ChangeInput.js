import React from 'react'
import styles from './GoodsListElements.module.scss'
import InputText from './CI-InputText'
import InputNumber from './CI-InputNumber'
import InputUnit from './CI-InputUnit'


function ChangeInput(props) {
console.log('[propsChangeInput]:', props)
  
  return (
    <>
      <div
        className={styles.changeInput}
        >
        <InputText 
          id={props.id}
          change={props.change}
          dispatch={props.dispatch}
        />
        <InputNumber 
          id={props.id}
          change={props.change}
          dispatch={props.dispatch}
        />
        <InputUnit />
      </div>
    </>
  )
}

export default ChangeInput
