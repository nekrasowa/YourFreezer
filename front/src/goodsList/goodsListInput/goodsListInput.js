import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash/lang'
import styles from './GoodsListInput.module.scss'
import { createGood } from '../../redux/thunks/thunksGoodsBox/createGood'
import { hideError, showError } from '../../redux/actions/actionsError'
import ErrorMessage from './ErrorMessage'

function GoodsListInput(props) {
  const dispatch = useDispatch()
  const isError = useSelector(state => state.isError.error)
  const errorMessage = useSelector(state => state.isError.error.message)
  const showErrorInBrowser = () => {
    if (_.isEmpty(isError)) {
      return false
    }
    return true
  }
 
  const [textGood, setTextGood] = useState('')
  const handleInputText = (e) => {
    dispatch(hideError())
    setTextGood(e.target.value)
  }

  const [numberGood, setNumberGood] = useState('')
  const handleInputNumber = (e) => {
    const errorMessage = 'Enter the number!'
    const userInput = Number(e.target.value)
    if (isNaN(userInput) && userInput !== '') {
      dispatch(showError(errorMessage))
      return
    }
    dispatch(hideError())
    setNumberGood(userInput)
  }

  const [unitGood, setUnitGood] = useState('')
  const handleInputUnit = (e) => {
    setUnitGood(e.target.value);
  }

  const data = {
    textGood,
    numberGood,
    unitGood
  }

  const inputTextStylesNormal = `${styles.InputText}`
  const inputTextStylesWarning = `${styles.InputText} ${styles.warning}`

  const AddHandler = () => {
    if (textGood === '') {
      const errorMessage = "Don't leave empty first field!"
      dispatch(showError(errorMessage))
      return
    }

    dispatch(hideError())
    dispatch(createGood(data))
    setTextGood('')
    setNumberGood('')
  }

  return (
    <>
      <div className={`${styles.GoodsListInput}`}>
        {showErrorInBrowser()
          ? <ErrorMessage message={errorMessage} />
          : <div className={`${styles.ErrorMessage}`}></div> 
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
              value='kg'
            />
            <span>kg</span>
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
          onClick={AddHandler}
          value={''}
        />
      </div>
    </>
  )
}

export default GoodsListInput