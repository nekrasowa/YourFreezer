import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'
import styles from './GoodsListInput.module.scss'
import { createGood } from '../../redux/actions/actionsGoodsList'

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
    info: {
      textGood,
      numberGood,
      unitGood,
      id: uniqid(),
    }
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