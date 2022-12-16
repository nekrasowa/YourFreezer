import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import styles from './BasicContent.module.scss'
import globalStyles from '../globalStyles.module.scss'
import { keepModifiedGood } from '../../redux/thunks/thunksFreezerGood/keepModifiedFreezerGood'
import { showError, hideError } from '../../redux/actions/actionsError'
import { showErrorStyle, hideErrorStyle } from '../../redux/actions/actionsContent'
function EditingElement(props) {
  const dispatch = useDispatch()

  const {
    goodName,
    goodNumber,
    goodUnit,
    id,
    typeOfGood
  } = props.goodInfo
  
  const [ newGoodName, setNewGoodName ] = useState(goodName)
  const onChangeName = (e) => {
    setNewGoodName(e.target.value)
    dispatch(hideError())
  }

  const [ newGoodNumber, setNewGoodNumber ] = useState(goodNumber)
  const onChangeNumber = (e) => {
    if(isNaN(e.target.value) && e.target.value !== '.') {

      const errorMessage = 'Input number!'
      dispatch(showError(errorMessage)) 
      return
    }
    console.log(e.target.value)
    
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
    textInput: newGoodName,
    numberInput: Number(newGoodNumber),
    unitInput: newGoodUnit,
    typeOfGood,
    id
  }

  const onClickHandler = () => {
    if(newGoodName === '') {
      const errorMessage = 'Input title!'
      dispatch(showError(errorMessage))
      dispatch(showErrorStyle())
      return
    }
    dispatch(hideErrorStyle())
    dispatch(hideError())
    dispatch(keepModifiedGood(savedGoodData))
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

