import React from 'react'
import styles from './GoodsListElements.module.css'

function BtnDelete(props) {
  function deleteElement() {
    props.deleteElementOfList(props.parentsID)

    console.log('[parentsId]:', props.parentsID)
  }
  return (
    <div 
      className={`${styles.element} ${styles.icon} ${styles.delete}`}
      onClick={deleteElement}
    ></div>
  )
}

export default BtnDelete