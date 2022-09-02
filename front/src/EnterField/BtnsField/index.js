import React from 'react'
import styles from './Btns.module.scss'

function BtnsField(props) {
  const clickHandlerE = () => {
    console.log('click E')
  }
  const clickHandlerR = () => {
    console.log('click R')
  }
  return (
    <div className={`${styles.BtnsField}`}>
        <button
          className={`${styles.BtnsField__Btn} ${styles.BtnsField__Btn_auth}`}
          type='button'
          onClick={clickHandlerE}
          name='Enter'
          value='Enter'
        >Enter</button>
        <button
          className={`${styles.BtnsField__Btn} ${styles.BtnsField__Btn_register}`}
          type='button'
          onClick={clickHandlerR}
          name='Register'
          value='Register' 
        >Register</button>
      </div>
  )
}

export default BtnsField
