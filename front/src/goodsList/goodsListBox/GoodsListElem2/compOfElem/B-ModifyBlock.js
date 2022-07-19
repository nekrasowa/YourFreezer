import React  from 'react'
import styles from '../GoodsListElements.module.scss'

function ModifyBlock(props) {


  return (
    <div className={`${styles.ModifyBlock}`}>
      <input 
        className={styles.inputText}
        onChange={null}
        value={null}
      />
      <input 
        className={styles.inputNumber}
        onChange={null}
        value={null}
      />
      <input 
        className={styles.inputUnit}
        onChange={null}
      />

      <div 
      className={`${styles.element} ${styles.tick}`}
      onClick={null}>  
      </div>
    </div>
  )
}

export default ModifyBlock
