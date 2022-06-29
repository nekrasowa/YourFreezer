import React from 'react'
import styles from './GoodsListInput.module.scss'
import InputText from './InputText'
import InputNumber from './InputNumber'
import InputAddBtn from './InputAddBtn'


function GoodsListInput(props) {
  return (
    <>
      <div className={`${styles.GoodsListInput}`}>
        <InputText dispatch={props.dispatch}/>
        <InputNumber dispatch={props.dispatch}/>
        <InputAddBtn dispatch={props.dispatch}/>
      </div>
    </>
  )
}

export default GoodsListInput