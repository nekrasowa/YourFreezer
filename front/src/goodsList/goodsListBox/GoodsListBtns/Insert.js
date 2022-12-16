import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './GoodsListBtns.module.scss'
import FilterTable from './InsertClick/FilterTable'
import { insertAction } from '../../../redux/actions/actionsGoodsList'
import { hideError, showError } from '../../../redux/actions/actionsError'

function Insert(props) {
  const dispatch = useDispatch()
  const insertState = useSelector((state) => state.createGood.insert)
  const goods = useSelector((state) => state.createGood.goods)
  console.log('goods>>>', goods)

  const chekedGoods = goods.filter((good) => good.states.isChecked === true)
  console.log('chekedGoods', chekedGoods)

  console.log('chekedGoods.length', chekedGoods.length)

  const onClickInsertHandler = () => {
    if(chekedGoods.length === 0) {
      dispatch(showError('Your list is empty'))
      return
    }
    
    dispatch(insertAction())
    dispatch(hideError())
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