import React from 'react'
import './GoodsListBtns.css'
import Insert from "./Insert"
import Copy from "./Copy"
import Delete from "./Delete"


function GoodsListBtns() {
  return (
      <div className='GoodsListBtns'> 
        <Insert />
        <Copy />
        <Delete />

      </div>
  )
}

export default GoodsListBtns