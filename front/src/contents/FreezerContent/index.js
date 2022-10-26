import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import styles from './FreezerContent.module.scss'
import globalStyles from '../globalStyles.module.scss'
import FreezerElement from './FreezerElement'
import EditingElement from '../globalComponents/EditingElement'
import ModifyElement from '../globalComponents/ModifyElement'
import AddBtn from '../globalComponents/AddBtn'
import { getGoods } from '../../redux/actions/actionsContent'

function FreezerContent() {
  const dispatch = useDispatch()
  const isClickedAdd = useSelector((state) => state.content.showInputField)

  const showAddOrModify = () => {
    if (isClickedAdd) {
      return <ModifyElement type='freezer'/>
    }
    return <AddBtn />
  }
  
  useEffect(() => {
    dispatch(getGoods())  
  }, [dispatch])

  const goods = useSelector((state) => state.content.goods)
  const freezerGoods = goods.filter((good) => good.typeOfGood === 'freezer')
  
  const freezerGoodsList = freezerGoods.map((good) => {
    if(good.editState) {
      return <EditingElement  goodInfo={good} key={good.id}/>
    }
    return <FreezerElement goodInfo={good} key={good.id}/>
  })

  return (
    <>
      <div className={`${styles.FreezerContent}`}>
        <div className={`${globalStyles.FreezerBackground} ${styles.FreezerContent__freezerBackground}`} />
        <div className={`${globalStyles.FreezerElements} ${styles.FreezerContent__freezerElements} `}>
        {freezerGoodsList}
        {showAddOrModify()}
        </div>
      </div>
    </>
  )
}

export default FreezerContent
