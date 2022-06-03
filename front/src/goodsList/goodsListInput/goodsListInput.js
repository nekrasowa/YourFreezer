import React from 'react'
import './goodsListInput.css'
import InputText from './InputText'
import InputRadioBtns from './InputRadioBtns'
import InputAddBtn from './InputAddBtn'


function GoodsListInput() {
  return (
    <>
      <div className="GoodsListInput">
        <InputText />
        <InputRadioBtns />
        <InputAddBtn />
      </div>
    </>
  )
}

export default GoodsListInput