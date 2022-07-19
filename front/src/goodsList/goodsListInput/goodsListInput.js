import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'
import styles from './GoodsListInput.module.scss'
import { addGood } from '../../redux/actions/actionsGoodsList'

function GoodsListInput(props) {
  
  const [ textGood, setTextGood ] = useState('')
  const handleInputText = (e) => {
    setTextGood(e.target.value);
  }
  const [ numberGood, setNumberGood ] = useState('')
  const handleInputNumber = (e) => {
    setNumberGood(e.target.value);
  }
  const [ unitGood, setUnitGood ] = useState('')
  const handleInputUnit = (e) => {
    setUnitGood(e.target.value);
  }

  const dispatch = useDispatch()

  const date = {
    textGood,
    numberGood,
    unitGood
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const id = uniqid()
    dispatch(addGood(date, id))
  }

  return (
    <>
      <form className={`${styles.GoodsListInput}`}>
        <input 
          className={`${styles.InputText}`}
          type='text'
          onChange={handleInputText}
          value={textGood} />

        <input 
          className={`${styles.InputNumber}`}
          type='text'
          onChange={handleInputNumber}
          value={numberGood} />
        <div 
          className={`${styles.container} ${styles.InputRadioBtns}`}
          onChange={handleInputUnit}
        >
          <label>
            <input 
              type='radio' 
              name='radio' 
              value='kilo'
              defaultChecked
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
        </div>
        <input 
          type='submit' 
          id={`${styles.addBtn}`} 
          onClick={handleAdd} 
          value={''}
          />
      </form>
    </>
  )
}

export default GoodsListInput