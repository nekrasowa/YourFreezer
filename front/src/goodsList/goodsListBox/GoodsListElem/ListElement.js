import React from "react"
import './GoodsListElements.css'
import './checkbox.css'

function ListElement() {
  return (
    <>
      <div className='listElement' id='1'>
        <input className='element checkbox'  name='1-check' value='no' type='checkbox' id='1-check' onclick='' />
        <label for='1-check'></label>
        <p className='element text'>text</p>
        <div className='element icon edit'></div>
        <div className='element icon delete'></div>
      </div>
    </>
  )
}

export default ListElement

