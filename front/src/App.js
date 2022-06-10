import React from "react"
import './App.scss'
import BackImg  from "./Background/Background"
import AppName from "./Background/AppName"
import RegisterField from "./EnterField/RegisterField/RegisterField"
import AuthField from "./EnterField/AuthField/AuthField"
import FridgeContents from "./Contents/FridgeContents/FridgeContents"
import FreezerContents from "./Contents/FreezerContents/FreezerContents"
import GoodsListInput from "./GoodsList/GoodsListInput/GoodsListInput"
import GoodsListBox from "./GoodsList/GoodsListBox/GoodsListBox"

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
