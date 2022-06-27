import React from 'react'
import styles from './GoodsListElements.module.scss'

function BtnDelete(props) {
  const deleteHandler = props.dispatch
  const id = props.id
  
  function deleteElement() {
    const action = {
      type: 'DELETE',
      parantsId: id
    }
    deleteHandler(action)
  }
  return (
    <div 
      className={`${styles.element} ${styles.icon} ${styles.delete}`}
      onClick={deleteElement}
    ></div>
  )
}

export default BtnDelete