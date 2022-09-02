import React from "react"
import styles from './App.module.scss'
import BackImg  from "./Background/Background"
import AppName from "./Background/AppName"
import EnterField from "./EnterField"
import FridgeContents from "./Contents/FridgeContents/FridgeContents"
import FreezerContents from "./Contents/FreezerContents/FreezerContents"
import GoodsListInput from "./GoodsList/GoodsListInput/GoodsListInput"
import GoodsListBox from "./GoodsList/GoodsListBox/GoodsListBox"

function App(props) {

  return (
    <div className={`${styles.App}`}>
      <BackImg />
      <AppName />
      <EnterField />
      <FridgeContents />
      <FreezerContents />
      <GoodsListInput />
      <GoodsListBox />
    </div>
  )
}

export default App
