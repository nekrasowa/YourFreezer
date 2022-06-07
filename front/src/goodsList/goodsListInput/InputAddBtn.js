import React from 'react'
import './goodsListInput.scss'
import './add.svg'
import GoodsListElements from '../goodsListBox/GoodsListElem/GoodsListElements.js'

function InputAddBtn() {
  return (
    <>
      <div className="InputAddBtn">
        <button type='button' id='addBtn' onClick={GoodsListElements}></button>
      </div>
    </>
  )
}

export default InputAddBtn
