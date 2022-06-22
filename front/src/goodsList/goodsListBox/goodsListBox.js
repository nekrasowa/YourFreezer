import React from "react"
import styles from './GoodsListBox.module.css'
import GoodsListBtns from "./GoodsListBtns/GoodsListBtns"
import GoodsListElements from "./GoodsListElem/GoodsListElements"


function GoodsListBox(props) {
  return (
    <>
      <div className={`${styles.GoodsListBox}`}>
        <GoodsListBtns />
        <GoodsListElements
          state={props.state} 
          metodList={props.metodList}/>
      </div>
    </>
  )
}

export default GoodsListBox
