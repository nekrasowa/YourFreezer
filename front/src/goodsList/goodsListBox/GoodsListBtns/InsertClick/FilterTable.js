import React from 'react'
import styles from '../GoodsListBtns.module.scss'
import TableHeader from './TableHeader'
import RowOfTable from './RowOfTable'

function FilterTable(props) {
    
  return (        
    <div className={`${styles.FilterTableArea}`}>
      <div className={`${styles.canselBtn}`}> </div>
      <div className={`${styles.FilterTable}`}>
        <TableHeader />

        <RowOfTable key={Math.random()} name='1'/>
        <RowOfTable key={Math.random()} name=' 2'/>
        <RowOfTable key={Math.random()} name='  3'/>
        <RowOfTable key={Math.random()} name='  3'/>
        <RowOfTable key={Math.random()} name='  3'/>
        <RowOfTable key={Math.random()} name='  3'/>
        <RowOfTable key={Math.random()} name='  3'/>
        <RowOfTable key={Math.random()} name='  3'/>
        <RowOfTable key={Math.random()} name='  3'/>
      
      </div>
      <div className={`${styles.transferBtn}`}> </div>

    </div>  
    )
}

export default FilterTable