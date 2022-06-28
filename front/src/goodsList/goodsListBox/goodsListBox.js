import React from "react"
import styles from './GoodsListBox.module.css'
import GoodsListBtns from "./GoodsListBtns/GoodsListBtns"
import GoodsListElements from "./GoodsListElem/GoodsListElements"


function GoodsListBox(props) {
  const state = props.store.getState()
  const copyText = state.copyText
  return (
    <>
      <div className={`${styles.GoodsListBox}`}>
        <GoodsListBtns 
          copyText={copyText}
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
