import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './BasicContent.module.scss'
import globalStyles from '../globalStyles.module.scss'
import BasicElement from './BasicElement'
import EditingElement from '../globalComponents/EditingElement'
import ModifyElement from '../globalComponents/ModifyElement'
import AddBtn from '../globalComponents/AddBtn'
import { getGoods } from '../../redux/actions/actionsContent'

function BasicContent() {
  const dispatch = useDispatch()
  const isClickedAdd = useSelector((state) => state.content.showInputFieldBasic)

  const showAddOrModify = () => {
    if (isClickedAdd) {
      return <ModifyElement type='basic'/>
    }
    return <AddBtn typePlace='basic'/>
  }
  
  useEffect(() => {
    dispatch(getGoods())  
  }, [dispatch])

  const goods = useSelector((state) => state.content.freezGoods)
  console.log('[goods]', goods)
  const basicGoods = goods.filter((good) => good.typeOfGood === 'basic')
  console.log('[basicGoods]', basicGoods)
  
  const basicGoodsList = basicGoods.map((good) => {
    if(good.editState) {
      return <EditingElement  goodInfo={good} key={good.id}/>
    }
    return <BasicElement goodInfo={good} key={good.id}/>
  })

  return (
    <>
      <div className={`${styles.BasicContent} `}>
        <div className={`${globalStyles.FreezerBackground} ${styles.BasicContent__basicBackground}`} />
        <div className={`${globalStyles.FreezerElements} ${styles.BasicContent__basicElements} `}>
          {basicGoodsList}
          {showAddOrModify()}
        </div>
      </div>
    </>
  )
}

export default BasicContent
