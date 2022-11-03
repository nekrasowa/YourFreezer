import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { keepModifiedGood } from '../../../../redux/thunks/thunksGoodsBox/keepModifiedGood'
import styles from '../GoodsListElements.module.scss'
import { hideError, showError } from '../../../../redux/actions/actionsError'

function ModifyBlock(props) {
  let {
    textGood: oldTextGood,
    numberGood: oldNumberGood,
    unitGood: oldUnitGood,
    id
  } = props.goodInfo.info
  if (oldNumberGood === null) {
    oldNumberGood = ''
  }
  const [textInput, setTextGood] = useState(oldTextGood)
  const handleInputText = (e) => {
    setTextGood(e.target.value);
  }

  const [numberInput, setNumberGood] = useState(oldNumberGood)

  const handleInputNumber = (e) => {
    const userInput = Number(e.target.value)
    const errorMessage = 'Enter the number!'

    if (isNaN(userInput)) {
      dispatch(showError(errorMessage))
      return
    }
    dispatch(hideError())

    setNumberGood(userInput);
  }

  const [unitInput, setUnitGood] = useState(oldUnitGood)
  const handleInputUnit = (e) => {
    dispatch(hideError())
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
    if (data.textInput === '') {
      const errorMessage = "Don't leave empty first field!"
      dispatch(showError(errorMessage))
      return
    }
    if (data.unitInput !== 'kg'
      && data.unitInput !== 'pcs'
      && data.unitInput !== '') {
      const errorMessage = "Only 'kg' or 'pcs'!"
      dispatch(showError(errorMessage))
      return
    }
    dispatch(hideError())
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
