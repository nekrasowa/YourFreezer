import React from 'react'
import './GoodsListInput.scss'
import './add.svg'
import GoodsListElements from '../GoodsListBox/GoodsListElem/GoodsListElements.js'

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
