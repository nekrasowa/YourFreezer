import React from 'react'
import styles from './EnterField.module.scss'
import BtnsField from './BtnsField'
import RegisterField from './RegisterField'
import AuthField from './AuthField'

function EnterField(props) {

  const showBlock = () => {
    const stateEnter = '2'
    if (stateEnter === '1') {
      return <BtnsField />
    }
    if (stateEnter === '2') {
      return <RegisterField />
    }
    if (stateEnter === '3') {
      return <AuthField />
    }
  }
    return (
    <div className={styles.EnterField}>
      {showBlock()}
    </div>
  )
}

export default EnterField
