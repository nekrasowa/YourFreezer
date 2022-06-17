import React from 'react'
import styles from './GoodsListElements.module.css'

function Pelement(props) {
  let stylesOfP
  props.isChecked 
    ? stylesOfP = `${styles.element} ${styles.text} ${styles.wasChecked}` 
    :stylesOfP = `${styles.element} ${styles.text}`

  return (
      <p 
        className={stylesOfP}>
        {props.text}
      </p>
    )
}

export default Pelement

