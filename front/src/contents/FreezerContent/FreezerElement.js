import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './FreezerContent.module.scss'
import globalStyles from '../globalStyles.module.scss'
import { deleteGood, editGood } from '../../redux/actions/actionsContent'

function FreezerElement(props) {
  const dispatch = useDispatch()
  const id = props.goodInfo.id

  const dblClickHandler = () => {
    dispatch(editGood(id))
  }

  const onClickCrossHandler = () => {
    console.log('delete')
    dispatch(deleteGood(id))
  }

  return (
    <>
      <div 
        className={` ${globalStyles.FreezerOneElement} ${styles.FreezerContent__freezerElement}`}
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

export default FreezerElement
