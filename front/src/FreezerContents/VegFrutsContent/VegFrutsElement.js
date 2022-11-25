import React from 'react'
import { useDispatch } from 'react-redux'
import globalStyles from '../globalStyles.module.scss'
import { editGood } from '../../redux/actions/actionsContent'
import { deleteFreezerGood } from '../../redux/thunks/thunksFreezerGood/deleteFreezerGood'
import { defineColor } from '../helpFunctions/difineColor'

function VegFrutsContent(props) {
  const dispatch = useDispatch()
  const id = props.goodInfo.id
  const timeStatus = props.goodInfo.timeStatus

  const dblClickHandler = () => {
    dispatch(editGood(id))
  }

  const onClickCrossHandler = () => {
    dispatch(deleteFreezerGood(id))
  }

  return (
    <>
      <div 
        className={defineColor(timeStatus, 4, 6)}
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

export default VegFrutsContent

