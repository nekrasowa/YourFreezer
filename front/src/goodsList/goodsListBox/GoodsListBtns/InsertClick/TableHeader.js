import React from 'react'
import styles from '../GoodsListBtns.module.scss'

function TableHeader(props) {
    
  return (        
    <div className={`${styles.TableHeader}`}>
          <div className={`${styles.empty}`}></div>
          <div className={`${styles.nameOfColumn} ${styles.nameOfColum_basic}`}>Basic</div>
          <div className={`${styles.nameOfColumn} ${styles.nameOfColum_vegFrut}`}>Veg&Fruts</div>
          <div className={`${styles.nameOfColumn} ${styles.nameOfColum_freezer}`}>Freezer</div>
    </div>  
    )
}

export default TableHeader