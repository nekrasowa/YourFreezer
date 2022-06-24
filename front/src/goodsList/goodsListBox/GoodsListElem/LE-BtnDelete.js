import React from 'react'
import styles from './GoodsListElements.module.scss'

function BtnDelete(props) {
  function deleteElement() {
    
    props.delete(props.id)

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