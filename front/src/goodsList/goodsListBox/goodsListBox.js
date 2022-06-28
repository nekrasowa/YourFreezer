import React from "react"
import styles from './GoodsListBox.module.css'
import GoodsListBtns from "./GoodsListBtns/GoodsListBtns"
import GoodsListElements from "./GoodsListElem/GoodsListElements"


function GoodsListBox(props) {
  return (
    <>
      <div className={`${styles.GoodsListBox}`}>
        <GoodsListBtns 
          dispatch={props.dispatch}
        />
        <GoodsListElements
          store={props.store}
          dispatch={props.dispatch}
          />
      </div>
    </>
  )
}

export default GoodsListBox
