import React  from 'react'
import styles from '../GoodsListElements.module.scss'


function DeleteBTN(props) {

  return (
    <>
      <div 
      className={`${styles.element} ${styles.icon} ${styles.delete}`}
      onClick={null}
    ></div>
    </>
  )
}

export default DeleteBTN