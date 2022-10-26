import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import styles from './BasicContent.module.scss'
import globalStyles from '../globalStyles.module.scss'
import { saveGood } from '../../redux/actions/actionsContent'
import { showError, hideError } from '../../redux/actions/actionsError'
import {  showErrorStyle, hideErrorStyle } from '../../redux/actions/actionsContent'
function EditingElement(props) {
  const dispatch = useDispatch()

  const {
    goodName,
    goodNumber,
    goodUnit,
    id
  } = props.goodInfo
  
  const [ newGoodName, setNewGoodName ] = useState(goodName)
  const onChangeName = (e) => {
    setNewGoodName(e.target.value)
    dispatch(hideError())

  }

  const [ newGoodNumber, setNewGoodNumber ] = useState(goodNumber)
  const onChangeNumber = (e) => {
    if(isNaN(e.target.value) && e.target.value !== '.') {
      const errorMassage = 'Input number!'
      dispatch(showError(errorMassage)) 
      return
    }
    setNewGoodNumber(e.target.value)
    dispatch(hideError())
  }
  const [ newGoodUnit, setNewGoodUnit] = useState(goodUnit)
  const onUnitClickHandler = () => {
    if (newGoodUnit === 'kg') {
      setNewGoodUnit('pcs')
      return
    }
    setNewGoodUnit('kg')
  }

  const savedGoodData = {
    newGoodName: newGoodName,
    newGoodNumber: newGoodNumber,
    newGoodUnit: newGoodUnit,
    id
  }

  const onClickHandler = () => {
    if(newGoodName === '') {
      const errorMassage = 'Input title!'
      dispatch(showError(errorMassage))
      dispatch(showErrorStyle())
      return
    }
    console.log('goodInfo', props.goodInfo)
    dispatch(hideErrorStyle())
    dispatch(hideError())
    dispatch(saveGood(savedGoodData))
  }

  return (
    <>
      <div className={`${globalStyles.EditingElement}`}>
        <input
          className={`${globalStyles.EditingElement__input__name}`}
          value={newGoodName}
          onChange={onChangeName}
         />
        <input
          className={`${globalStyles.EditingElement__input__number}`}
          value={newGoodNumber}
          onChange={onChangeNumber}
         />
        <p
          className={`${globalStyles.EditingElement__input__unit}`}
          onClick={onUnitClickHandler}
          >
          {newGoodUnit}
        </p>
        <div 
          className={`${globalStyles.EditingElement__tick}`}
          onClick={onClickHandler}
          ></div>
      </div>
    </>
  )
}

export default EditingElement

