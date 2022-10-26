import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './VegFrutsContents.module.scss'
import globalStyles from '../globalStyles.module.scss'
import VegFrutsElement from './VegFrutsElement'
import EditingElement from '../globalComponents/EditingElement'
import ModifyElement from '../globalComponents/ModifyElement'
import AddBtn from '../globalComponents/AddBtn'
import { getGoods } from '../../redux/actions/actionsContent'

function VegFrutsContent() {
  const dispatch = useDispatch()
  const isClickedAdd = useSelector((state) => state.content.showInputField)

  const showAddOrModify = () => {
    if (isClickedAdd) {
      return <ModifyElement type='vegFruts'/>
    }
    return <AddBtn />
  }

  useEffect(() => {
    dispatch(getGoods())  
  }, [dispatch])

  const goods = useSelector((state) => state.content.goods)
  const vegFrutsGoods = goods.filter((good) => good.typeOfGood === 'vegFruts')
  
  const vegFrutsGoodsList = vegFrutsGoods.map((good) => {
    if(good.editState) {
      return <EditingElement  goodInfo={good} key={good.id}/>
    }
    return <VegFrutsElement goodInfo={good} key={good.id}/>
  })

  return (
    <>
     <div className={`${styles.VegFrutsContent} `}>
        <div className={`${globalStyles.FreezerBackground} ${styles.VegFrutsContent__vegFrutsBackground} `} />
        <div className={`${globalStyles.FreezerElements} ${styles.VegFrutsContent__vegFrutsElements} `}>
        {vegFrutsGoodsList}
        {showAddOrModify()}
        </div>
      </div>
    </>
  )
}

export default VegFrutsContent

