import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './BasicContent.module.scss'
import globalStyles from '../globalStyles.module.scss'
import { deleteBasicGood } from '../../redux/actions/actionsContent'

function BasicElement(props) {
  const dispatch = useDispatch()
  const id = props.goodInfo.id
  const basicGoods = useSelector((state) => state.content.basicGoods)

  const onClickHandler = () => {
    console.log('delete')
    console.log('basicGoods', basicGoods)
    dispatch(deleteBasicGood(id))
  }

  return (
    <>
      <div className={` ${globalStyles.FreezerOneElement} ${styles.BasicContent__basicElement}`}>
        <p 
          className={`${globalStyles.FreezerElement__name}`}
        >{props.goodInfo.goodName}</p>
        <p 
          className={`${globalStyles.FreezerElement__info}`}
        >{`${props.goodInfo.goodNumber} ${props.goodInfo.goodUnit}`}</p>
        <div 
          className={`${globalStyles.FreezerElement__cross}`}
          onClick={onClickHandler}
          ></div>
      </div>
    </>
  )
}

export default BasicElement
