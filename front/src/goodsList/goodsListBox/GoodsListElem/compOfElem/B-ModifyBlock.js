import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { keepModifiedGood } from '../../../../redux/thunks/thunksGoodsBox/keepModifiedGood'
import styles from '../GoodsListElements.module.scss'

function ModifyBlock(props) {
  const { 
    textGood: oldTextGood,
    numberGood: oldNumberGood,
    unitGood: oldUnitGood,
    id 
  } = props.goodInfo.info

  const [ textInput, setTextGood ] = useState(oldTextGood)
  const handleInputText = (e) => {
    setTextGood(e.target.value);
  }

  const [ numberInput, setNumberGood ] = useState(oldNumberGood)
  const handleInputNumber = (e) => {
    setNumberGood(e.target.value);
  }
  const [ unitInput, setUnitGood ] = useState(oldUnitGood)
  const handleInputUnit = (e) => {
    setUnitGood(e.target.value);
  }

  const dispatch = useDispatch()

  const data = {
    id,
    textInput,
    numberInput,
    unitInput
  }

  const modifyHandler = () => {
    dispatch(keepModifiedGood(data))
  }
  return (
    <div className={`${styles.ModifyBlock}`}>
      <input 
        className={styles.inputText}
        onChange={handleInputText}
        type='text'
        value={textInput}
      />
      <input 
        className={styles.inputNumber}
        onChange={handleInputNumber}
        type='text'
        value={numberInput}
      />
      <input 
        className={styles.inputUnit}
        onChange={handleInputUnit}
        type='text'
        value={unitInput}
      />

      <div 
      className={`${styles.element} ${styles.tick}`}
      onClick={modifyHandler}>  
      </div>
    </div>
  )
}

export default ModifyBlock
