import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../GoodsListBtns.module.scss'
import TableHeader from './TableHeader'
import RowOfTable from './RowOfTable'
import {
  insertCloseAction,
  deleteFreezContentAction
} from '../../../../redux/actions/actionsGoodsList'
import { createFreezerGood } from '../../../../redux/thunks/thunksFreezerGood/createFreezerGood'
import { getAllFreezerGoods } from '../../../../redux/thunks/thunksFreezerGood/getAllFreezerGoods'

function FilterTable(props) {
  const dispatch = useDispatch()

  const onClickCanselHandler = () => {

    dispatch(insertCloseAction())
    dispatch(deleteFreezContentAction())

    return
  }

  const goods = useSelector((state) => state.createGood.goods)
  const checkedGoods = goods.filter((good) => good.states.isChecked)

  const checkedGoodsList = checkedGoods.map((good) => <RowOfTable key={good.info.id} info={good.info}/>)

  const freezGoods = useSelector((state) => state.createGood.freezContent)
  console.log('freezGoods', freezGoods)

  const onClickTransferHandler = () => {
    freezGoods.forEach((good) => {
      console.log('good', good)
      dispatch(createFreezerGood(good))
    })
    dispatch(insertCloseAction())
    setTimeout(dispatch(getAllFreezerGoods()), 3000)
    

  }

  return (        
    <div className={`${styles.FilterTableArea}`}>
      <div 
        className={`${styles.canselBtn}`}
        onClick={onClickCanselHandler}
      > </div>

      <div className={`${styles.FilterTable}`}>
        <TableHeader />
        {checkedGoodsList}
      
      </div>
      <div className={`${styles.transferBtn}`}
        onClick={onClickTransferHandler}
      > </div>

    </div>  
    )
}

export default FilterTable