import React from 'react'
import styles from './Btns.module.scss'
import { useDispatch } from 'react-redux'
import { showRegisterField, showAuthField } from '../../redux/actions/actionsEnter'

function BtnsField(props) {
  const dispatch = useDispatch()

  const clickHandlerAuth = () => {
    dispatch(showAuthField())
  }
  const clickHandlerRegister = () => {
    dispatch(showRegisterField())
  }
  return (
    <div className={`${styles.BtnsField}`}>
        <button
          className={`${styles.BtnsField__Btn} ${styles.BtnsField__Btn_auth}`}
          type='button'
          onClick={clickHandlerAuth}
          name='Enter'
          value='Enter'
        >Enter</button>
        <button
          className={`${styles.BtnsField__Btn} ${styles.BtnsField__Btn_register}`}
          type='button'
          onClick={clickHandlerRegister}
          name='Register'
          value='Register' 
        >Register</button>
      </div>
  )
}

export default BtnsField
