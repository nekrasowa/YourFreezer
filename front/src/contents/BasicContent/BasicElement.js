import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './BasicContent.module.scss'
import globalStyles from '../globalStyles.module.scss'
import { deleteBasicGood, editBasicGood } from '../../redux/actions/actionsContent'

function BasicElement(props) {
  const dispatch = useDispatch()
  const id = props.goodInfo.id
  const basicGoods = useSelector((state) => state.content.basicGoods)

  const dblClickHandler = () => {
    console.log('basicGoods', basicGoods)
    dispatch(editBasicGood(id))
    
  }

  const onClickCrossHandler = () => {
    console.log('delete')
    console.log('basicGoods', basicGoods)
    dispatch(deleteBasicGood(id))
  }

  return (
    <>
      <div 
        className={` ${globalStyles.FreezerOneElement} ${styles.BasicContent__basicElement}`}
        onDoubleClick={dblClickHandler}
        >
        <p 
          className={`${globalStyles.FreezerElement__name}`}
        >{props.goodInfo.goodName}</p>
        <p 
          className={`${globalStyles.FreezerElement__info}`}
        >{`${props.goodInfo.goodNumber} ${props.goodInfo.goodUnit}`}</p>
        <div 
          className={`${globalStyles.FreezerElement__cross}`}
          onClick={onClickCrossHandler}
          ></div>
      </div>
    </>
  )
}

export default BasicElement
