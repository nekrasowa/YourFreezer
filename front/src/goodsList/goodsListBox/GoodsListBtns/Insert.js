import React from 'react'
import styles from './GoodsListBtns.module.scss'
import FilterTable from './InsertClick/FilterTable'

function Insert(props) {
  const onClickInsertHandler = () => {
    return 
  }

  return (        
    <div className={`${styles.Insert}`}>
      <button 
        type='button' 
        id={`${styles.InsertBtn}`}
        onClick={onClickInsertHandler}
      ></button>
      <FilterTable />
    </div>  
    )
}

export default Insert