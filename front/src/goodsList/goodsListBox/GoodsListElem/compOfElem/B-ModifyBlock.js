import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { keepModifiedGood } from '../../../../redux/thunks/thunksGoodsBox/keepModifiedGood'
import styles from '../GoodsListElements.module.scss'
import { hideError, showError } from '../../../../redux/actions/actionsError'

function ModifyBlock(props) {
  const {
    textGood: oldTextGood,
    numberGood: oldNumberGood,
    unitGood: oldUnitGood,
    id
  } = props.goodInfo.info

  const [textInput, setTextGood] = useState(oldTextGood)
  const handleInputText = (e) => {
    setTextGood(e.target.value);
  }

  const [numberInput, setNumberGood] = useState(oldNumberGood)

  const handleInputNumber = (e) => {
    const userInput = Number(e.target.value)
    const errorMassage = 'Enter the number!'

    if (isNaN(userInput)) {
      dispatch(showError(errorMassage))
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
      const errorMassage = "Don't leave empty first field!"
      dispatch(showError(errorMassage))
      return
    }
    if (data.unitInput !== 'kg' && data.unitInput !== 'pcs') {
      const errorMassage = "Only 'kg' or 'pcs'!"
      dispatch(showError(errorMassage))
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
