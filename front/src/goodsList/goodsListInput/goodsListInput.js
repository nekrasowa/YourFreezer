import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash/lang'
import styles from './GoodsListInput.module.scss'
import { createGood } from '../../redux/thunks/thunksGoodsBox/createGood'
import { showError } from '../../redux/actions/actionsError'

function GoodsListInput(props) {
  const dispatch = useDispatch()

  const [textGood, setTextGood] = useState('')
  const handleInputText = (e) => {
    setTextGood(e.target.value)
  }

  const [numberGood, setNumberGood] = useState('')
  const handleInputNumber = (e) => {
    if(typeof e.target.value === Number) {
      setNumberGood(e.target.value)
    }

    const massage = 'Enter the number!'
    dispatch(showError(massage))
  }

  const isError = useSelector(state => state.isError.error)
  let errorMassage 
  if (!_.isEmpty(isError)) {
    errorMassage = isError.massage
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
    if(textGood === '') {
      return 
    }
    dispatch(createGood(data))
    setTextGood('')
    setNumberGood('')
  }

  return (
    <>
      <div className={`${styles.ErrorMassage}`}>
        <p>{errorMassage}</p>
      </div>
      <div className={`${styles.GoodsListInput}`}>
        <input
          className={textGood === ''
            ? inputTextStylesWarning
            : inputTextStylesNormal}
          type='text'
          onChange={handleInputText}
          value={textGood} />

        <input
          className={`${styles.InputNumber}`}
          type='text'
          onChange={handleInputNumber}
          value={numberGood} />
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