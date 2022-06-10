import React from 'react'
import styles from './GoodsListInput.module.scss'
import InputText from './InputText'
import InputNumber from './InputNumber'
import InputAddBtn from './InputAddBtn'


function GoodsListInput() {
  return (
    <>
      <div className={`${styles.GoodsListInput}`}>
        <InputText />
        <InputNumber />
        <InputAddBtn />
      </div>
    </>
  )
}

export default GoodsListInput