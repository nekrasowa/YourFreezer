import React from 'react'
import { useDispatch } from 'react-redux'
import stylesBtn from '../BtnsField/Btns.module.scss'
import styles from '../ExitField/ExitField.module.scss'
import { showEnterBtns } from '../../redux/actions/actionsEnter'
import { initGoods } from '../../redux/actions/actionsGoodsList'

function ExitField() {
  const dispatch = useDispatch()

  const clickHandlerExit = (e) => {
    localStorage.removeItem('jwt')
    dispatch(initGoods([]))
    dispatch(showEnterBtns())
  }
  return (
    <>
      <button
        className={`${stylesBtn.BtnsField__Btn} ${styles.Exit}`}
        type='button'
        onClick={clickHandlerExit}
      >Exit</button>
    </>
  )
}

export default ExitField
