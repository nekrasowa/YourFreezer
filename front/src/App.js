import React from 'react'
import styles from './App.module.scss'
import BackImg  from './Background/Background'
import EnterField from './EnterField'
import Contents from './FreezerContents/Contents'
import GoodsListInput from './GoodsList/GoodsListInput/GoodsListInput'
import GoodsListBox from './GoodsList/GoodsListBox/GoodsListBox'

function App(props) {

  return (
    <div className={`${styles.App}`}>
      <BackImg />
      <EnterField />
      <Contents />
      <GoodsListInput />
      <GoodsListBox />
    </div>
  )
}

export default App
