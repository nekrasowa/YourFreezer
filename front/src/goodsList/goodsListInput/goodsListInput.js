import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './GoodsListInput.module.scss'
import { createGood } from '../../redux/thunks/thunksGoodsBox/createGood'

function GoodsListInput(props) {

  const [textGood, setTextGood] = useState('')
  const handleInputText = (e) => {
    setTextGood(e.target.value);
  }
  const [numberGood, setNumberGood] = useState('')
  const handleInputNumber = (e) => {
    setNumberGood(e.target.value);
  }
  const [unitGood, setUnitGood] = useState('')
  const handleInputUnit = (e) => {
    setUnitGood(e.target.value);
  }
  const dispatch = useDispatch()

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
        <div
          className={`${styles.BoxRadioBtns}`}>
          <form
            className={`${styles.InputRadioBtns}`}
            onChange={handleInputUnit}>
            <label>
              <input
                type='radio'
                name='radio'
                value='kilo'
              // defaultChecked
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
        </div>

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