import React from 'react'
import './GoodsListInput.scss'
import InputText from './InputText'
import InputNumber from './InputNumber'
import InputAddBtn from './InputAddBtn'


function GoodsListInput() {
  return (
    <>
      <div className="GoodsListInput">
        <InputText />
        <InputNumber />
        <InputAddBtn />
      </div>
    </>
  )
}

export default GoodsListInput