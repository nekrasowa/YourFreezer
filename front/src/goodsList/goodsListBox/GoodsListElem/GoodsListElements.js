import React, { useEffect } from 'react'
import styles from './GoodsListElements.module.scss'
import ListElement from './ListElement'
// import Loader from '../../../Background/Loader'
// import { Loader } from 'rsuite'
import 'rsuite/dist/rsuite.min.css'
import { useSelector, useDispatch } from 'react-redux'
import { getAllGoods } from '../../../redux/thunks/thunksGoodsBox/getAllGoods'

function GoodsListElements(props) {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllGoods())  
  }, [dispatch])

  const goods = useSelector(state => state.createGood.goods)
  const list = goods.map(good => <ListElement goodInfo={good} key={good.info.id}/>)
   
  return (
    <div className={`${styles.BoxElements}`}>
      {list}
    </div>
  )
}

export default GoodsListElements
