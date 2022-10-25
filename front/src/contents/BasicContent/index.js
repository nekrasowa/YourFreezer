import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './BasicContent.module.scss'
import globalStyles from '../globalStyles.module.scss'
import BasicElement from './BasicElement'
import EditingElement from './EditingElement'
import ModifyElement from './ModifyElement'
import AddBtn from './AddBtn'
import { getBasicGoods } from '../../redux/actions/actionsContent'

function BasicContent() {
  const dispatch = useDispatch()
  const isClickedAdd = useSelector((state) => state.content.showInputField)

  const showAddOrModify = () => {
    if (isClickedAdd) {
      return <ModifyElement />
    }
    return <AddBtn />
  }
  
  useEffect(() => {
    dispatch(getBasicGoods())  
  }, [dispatch])

  const basicGoods = useSelector((state) => state.content.basicGoods)
  const basicGoodsList = basicGoods.map((good) => {
    if(good.basicEditState) {
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
