import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash/lang'
import styles from './GoodsListInput.module.scss'
import { createGood } from '../../redux/thunks/thunksGoodsBox/createGood'
import { hideError, showError } from '../../redux/actions/actionsError'
import ErrorMassage from './ErrorMassage'

function GoodsListInput(props) {
  const dispatch = useDispatch()

  const [textGood, setTextGood] = useState('')
  const handleInputText = (e) => {
    setTextGood(e.target.value)
  }

  const [numberGood, setNumberGood] = useState('')
  const errorMassage = 'Enter the number!'

  const handleInputNumber = (e) => {
    const userInput = Number(e.target.value)

    if (isNaN(userInput)) {
      dispatch(showError(errorMassage))
      return
    }

    if (!isNaN(userInput)) {
      dispatch(hideError())
      return
    }
    dispatch(hideError)

    setNumberGood(userInput)
  }

  const isError = useSelector(state => state.isError.error)
  const showErrorInBrowser = () => {
    if (!_.isEmpty(isError)) {


      return true
    }
    return false
  }

  const [unitGood, setUnitGood] = useState('')
  const handleInputUnit = (e) => {
    setUnitGood(e.target.value);
  }

  const data = {
    textGood,
    numberGood,
    unitGood,
  }

  const inputTextStylesNormal = `${styles.InputText}`
  const inputTextStylesWarning = `${styles.InputText} ${styles.warning}`

  const AddHandle = () => {
    if (textGood === '') {
      return
    }
    dispatch(createGood(data))
    setTextGood('')
    setNumberGood('')
  }

  return (
    <>
      <div className={`${styles.GoodsListInput}`}>
        {showErrorInBrowser()
          ? <ErrorMassage massage={errorMassage} />
          : <div className={`${styles.ErrorMassage}`}></div> 
          }
        <input 
          className={textGood === ''
            ? inputTextStylesWarning
            : inputTextStylesNormal}
          type='text'
          onChange={handleInputText}
          value={textGood}
          maxLength='30'
        />

        <input
          className={`${styles.InputNumber}`}
          type='text'
          onChange={handleInputNumber}
          value={numberGood}
          maxLength='4'
        />
        <form
          className={`${styles.container} ${styles.InputRadioBtns}`}
          onChange={handleInputUnit}>
          <label>
            <input
              type='radio'
              name='radio'
              value='kilo'
            />
            <span>kilo</span>
          </label>
          <label>
            <input
              type='radio'
              name='radio'
              value='pcs'
            />
            <span>pcs</span>
          </label>
        </form>
        <input
          type='submit'
          id={`${styles.addBtn}`}
          onClick={AddHandle}
          value={''}
        />
      </div>
    </>
  )
}

export default GoodsListInput