import React from 'react'
import styles from './GoodsListElements.module.scss'

function Pelement(props) {
  let stylesOfP
  const space = ' '
  props.isChecked 
    ? stylesOfP = `${styles.element} ${styles.text} ${styles.wasChecked}` 
    :stylesOfP = `${styles.element} ${styles.text}`

  return (
      <p 
        className={stylesOfP}>
        {props.text}
        {space}
        {props.number}
        {space}
        {props.unit}
      </p>
    )
}

export default Pelement
