import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './VegFrutsContents.module.scss'
import globalStyles from '../globalStyles.module.scss'
import VegFrutsElement from './VegFrutsElement'
import EditingElement from '../globalComponents/EditingElement'
import ModifyElement from '../globalComponents/ModifyElement'
import AddBtn from '../globalComponents/AddBtn'
import { getAllFreezerGoods } from '../../redux/thunks/thunksFreezerGood/getAllFreezerGoods'

function VegFrutsContent() {
  const dispatch = useDispatch()
  const isClickedAdd = useSelector((state) => state.content.showInputFieldVegFruts)

  const showAddOrModify = () => {
    if (isClickedAdd) {
      return <ModifyElement type='vegFruts'/>
    }
    return <AddBtn typePlace='vegFruts'/>
  }

  useEffect(() => {
    dispatch(getAllFreezerGoods())  
  }, [dispatch])

  const goods = useSelector((state) => state.content.freezGoods)

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

