import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideInputField } from '../../redux/actions/actionsContent'
import { showError, hideError } from '../../redux/actions/actionsError'
import { createFreezerGood } from '../../redux/thunks/thunksFreezerGood/createFreezerGood'
import { showErrorStyle, hideErrorStyle } from '../../redux/actions/actionsContent'
import { getAllFreezerGoods } from '../../redux/thunks/thunksFreezerGood/getAllFreezerGoods'
import globalStyles from '../globalStyles.module.scss'
import styles from '../VegFrutsContent/VegFrutsContents.module.scss'

function ModifyElement(props) {

  const dispatch = useDispatch()

  const typeOfGood = props.type

  const [goodName, setGoodName] = useState('')
  const inputNameHandler = (e) => {
    setGoodName(e.target.value)
    dispatch(hideErrorStyle())
    dispatch(hideError())
  }

  const [goodNumber, setGoodNumber] = useState('')
  const inputNumberHandler = (e) => {
    const userInput = Number(e.target.value)
    if(isNaN(userInput) && userInput !== '.') {
      const errorMessage = 'Input number!'
      dispatch(showError(errorMessage)) 
      return
    }
    setGoodNumber(userInput)
    dispatch(hideError())
  }

  const [goodUnit, setGoodUnit] = useState('')
  const inputUnitHandler = (e) => {
    setGoodUnit(e.target.value)
  }
  
  const dataOfNewGood = {
    goodName,
    goodNumber,
    goodUnit,
    typeOfGood: typeOfGood,
    // id: getRandomInt(1, 100000),
  }

  const isInputCorrect = useSelector((state) => state.content.isCorrectInput)

  const plusClickHandler = () => {
    if (goodNumber < 1 && goodNumber > 0) {
      const increasedNumber = Number(goodNumber) + 0.1
      const roundedNumber = Math.round(increasedNumber*10)/10
      setGoodNumber(roundedNumber)
      return
    }
    if (goodNumber === '' 
      || (goodNumber >= 1 && goodNumber <= 9) 
      || goodNumber === 0
      | goodNumber === -1) {
      dispatch(hideError())

      const increasedNumber = Number(goodNumber) + 1
      setGoodNumber(increasedNumber)
      return
    }
    if (goodNumber >= 10 && goodNumber <= 99) {
      const increasedNumber = Number(goodNumber) + 10
      setGoodNumber(increasedNumber)
      return
    }
  }
  if (goodNumber <= -1) {
    const errorMessage = 'Don\'t leave negative value!'
    dispatch(showError(errorMessage)) 
  }

  const minusClickHandler = () => {
    if (goodNumber < 1 && goodNumber > 0) {
      const reducedNumber = Number(goodNumber) - 0.1
      const roundedNumber = Math.round(reducedNumber*10)/10
      setGoodNumber(roundedNumber)
      return
    }
    if ( goodNumber === '' 
        || (goodNumber >= 1 && goodNumber <= 9) 
        || goodNumber === 0 ) {
      dispatch(hideError())
      const reducedNumber = Number(goodNumber) - 1
      setGoodNumber(reducedNumber)
      return
    }
    if (goodNumber >= 10 && goodNumber <= 99) {
      const reducedNumber = Number(goodNumber) - 10
      setGoodNumber(reducedNumber)
      return
    }
  }

  const onClickHandler = () => {
    if(goodName === '') {
      const errorMessage = 'Input title!'
      dispatch(showError(errorMessage))
      dispatch(showErrorStyle())
      return
    }
    dispatch(createFreezerGood(dataOfNewGood))
    dispatch(hideErrorStyle())
    dispatch(hideError())
    dispatch(hideInputField(typeOfGood))
    dispatch(getAllFreezerGoods())
  }
  const onClickOnCrossHandler = () => {
    dispatch(hideErrorStyle())
    dispatch(hideError())
    dispatch(hideInputField(typeOfGood)) 
  }

  const modifyBlockStyle = () => {
    if(props.type === 'vegFruts') {
      return `${globalStyles.FreezerOneInput} ${styles.FreezerOneInput_vegFruts} `
    }
    return `${globalStyles.FreezerOneInput}`
  }


  return (
    <>
      <div className={modifyBlockStyle()}>
        <input 
          className={ 
            isInputCorrect
            ? `${globalStyles.FreezerInput__name}`
            : `${globalStyles.FreezerInput__name} ${globalStyles.FreezerInput__name_error}`
          } 
          value={goodName}
          onChange={inputNameHandler}
          type='text'
          placeholder='title'
          autoFocus 
        />
        <div 
          className={`${globalStyles.FreezerElement__cross} ${globalStyles.FreezerInput__cross}`}
          onClick={onClickOnCrossHandler}
          ></div>
        <div className={`${globalStyles.FreezerElement__numContainer}`}>
          <input 
          className={`${globalStyles.FreezerInput__number}`} 
          type='text'
          value={goodNumber}
          maxLength='3'
          onChange={inputNumberHandler}
          placeholder='№'
          />
          <div 
            className={`${globalStyles.plus}`}
            onClick={plusClickHandler}
            ></div>
          <div 
            className={`${globalStyles.minus}`}
            onClick={minusClickHandler}
            ></div>
        </div>
        
        <form 
          className={`${globalStyles.FreezerInput__form}`}
          onChange={inputUnitHandler}
          >
          <label>
            <input
              type='radio'
              name='radio'
              value='kg'
            />
            <span className={`${globalStyles.FreezerInput__span_kg}`}>kg</span>
          </label>
          <label>
            <input
              type='radio'
              name='radio'
              value='pcs'
            />
            <span className={`${globalStyles.FreezerInput__span_pcs}`}>pcs</span>
          </label>
        </form>
        <input className={`${globalStyles.FreezerInput__submit}`}
          id={`${globalStyles.FreezerInput__submit}`}
          type='submit'
          value={` `}
          onClick={onClickHandler}
        /> 
        
      </div>

    </>
  )
}

export default ModifyElement
