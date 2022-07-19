import React from 'react'
import styles from './GoodsListBtns.module.scss'

function Delete(props) {
  
  return (        
    <div className={`${styles.Delete}`}>
      <button 
        type='button' 
        id={`${styles.DeleteBtn}`}
        onClick={null}
        />
    </div>
  )
}

export default Delete