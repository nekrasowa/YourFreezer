import React from "react"
import './App.css'
import BackImg  from "./background/background"
import AppName from "./background/appName"
import RegisterField from "./enterField/registerField/registerField"
import AuthField from "./enterField/authField/authField"
import FridgeContents from "./contents/fridgeContents/fridgeContents"
import FreezerContents from "./contents/freezerContents/freezerContents"
import GoodsListInput from "./goodsList/goodsListInput/goodsListInput"
import GoodsListBox from "./goodsList/goodsListBox/goodsListBox"

function App() {
  return (
    <div className="App">
      <BackImg />
      <AppName />
      <RegisterField />
      <AuthField />
      <FridgeContents />
      <FreezerContents />
      <GoodsListInput />
      <GoodsListBox />
    </div>
  )
}

export default App
