import React from "react"
import styles from './GoodsListBox.module.css'
import GoodsListBtns from "./GoodsListBtns/GoodsListBtns"
import GoodsListElements from "./GoodsListElem/GoodsListElements"


function GoodsListBox() {
  return (
    <>
      <div className={`${styles.GoodsListBox}`}>
        <GoodsListBtns />
        <GoodsListElements />
      </div>
    </>
  )
}

export default GoodsListBox
