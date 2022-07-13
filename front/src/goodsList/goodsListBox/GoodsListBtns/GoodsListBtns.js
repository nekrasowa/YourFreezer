import React from 'react'
import styles from './GoodsListBtns.module.scss'
import Insert from './Insert'
import Copy from './Copy2'
import Delete from './Delete'
import store from '../../../redux/store'

function GoodsListBtns(props) {

  return (
      <div className={`${styles.GoodsListBtns}`}> 
        <Insert />
        <Copy
          store={store}
        />
        <Delete 
          dispatch={props.dispatch}
        />
      </div>
  )
}

export default GoodsListBtns