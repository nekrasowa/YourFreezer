import React from 'react'
import styles from './GoodsListElements.module.css'

function BtnDelete(props) {
  function deleteElement() {
    props.deleteElementFromList(props.parentsId)

    console.log('[parentsId]:', props.parentsId)
  }
  return (
    <div 
      className={`${styles.element} ${styles.icon} ${styles.delete}`}
      onClick={deleteElement}
    ></div>
  )
}

export default BtnDelete