import React from "react"
import styles from './App.module.scss'
import BackImg  from "./Background/Background"
import AppName from "./Background/AppName"
import RegisterField from "./EnterField/RegisterField/RegisterField"
import AuthField from "./EnterField/AuthField/AuthField"
import FridgeContents from "./Contents/FridgeContents/FridgeContents"
import FreezerContents from "./Contents/FreezerContents/FreezerContents"
import GoodsListInput from "./GoodsList/GoodsListInput/GoodsListInput"
import GoodsListBox from "./GoodsList/GoodsListBox/GoodsListBox"

function App(props) {

  return (
    <div className={`${styles.App}`}>
      <BackImg />
      <AppName />
      <RegisterField />
      <AuthField />
      <FridgeContents />
      <FreezerContents />
      <GoodsListInput store={props.store} dispatch={props.dispatch}/>
      <GoodsListBox store={props.store} dispatch={props.dispatch}/>
    </div>
  )
}

export default App
