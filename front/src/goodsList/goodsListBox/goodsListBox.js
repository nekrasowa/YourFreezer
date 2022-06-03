import React from "react"
import './goodsListBox.css'
import GoodsListBtns from ".//GoodsListBtns/GoodsListBtns"
import GoodsListElements from "./GoodsListElem/GoodsListElements"


function GoodsListBox() {
  return (
    <>
      <div className="GoodsListBox">
        <GoodsListBtns />
        <GoodsListElements />
      </div>
    </>
  )
}

export default GoodsListBox
