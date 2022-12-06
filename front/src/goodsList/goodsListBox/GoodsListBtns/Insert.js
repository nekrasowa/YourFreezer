import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './GoodsListBtns.module.scss'
import FilterTable from './InsertClick/FilterTable'
import { insertAction } from '../../../redux/actions/actionsGoodsList'

function Insert(props) {
  const dispatch = useDispatch()
  const insertState = useSelector((state) => state.createGood.insert)

  const onClickInsertHandler = () => {
    dispatch(insertAction())
    return 
  }

  return (        
    <div className={`${styles.Insert}`}>
      <button 
        type='button' 
        id={`${styles.InsertBtn}`}
        onClick={onClickInsertHandler}
      ></button>
      {insertState
        ? <FilterTable />
        : null}
    </div>  
    )
}

export default Insert