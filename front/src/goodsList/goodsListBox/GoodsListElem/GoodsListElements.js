import React from 'react'
import styles from './GoodsListElements.module.css'
import ListElement from './ListElement'

function GoodsListElements() {
  return (
      <div className={`${styles.BoxElements}`}>
        <ListElement />
        <ListElement />
        <ListElement />
        <ListElement />

      </div>
  )
}

export default GoodsListElements