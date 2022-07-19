import React  from 'react'
import styles from '../GoodsListElements.module.scss'

function ReadBlock(props) {


  return (
    <div className={`${styles.BodyOfElem}`}>
      <p 
        className={`${styles.element} ${styles.text} ${styles.wasChecked}`}
        value='text'> TEXT
      </p>

      <div 
        className={`${styles.element} ${styles.icon} ${styles.edit}`}
        onClick={null} > 
      </div>
    </div>
  )
}

export default ReadBlock