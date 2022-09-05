import React from 'react'
import styles from './EnterField.module.scss'
import AppName from '../Background/AppName'
import BtnsField from './BtnsField'
import RegisterField from './RegisterField'
import AuthField from './AuthField'
import WelcomeField from './WelcomeField'

function EnterField(props) {

  const showBlock = () => {
    const stateEnter = '4'
    if (stateEnter === '1') {
      return <BtnsField />
    }
    if (stateEnter === '2') {
      return <RegisterField />
    }
    if (stateEnter === '3') {
      return <AuthField />
    }
    if (stateEnter === '4') {
      return <WelcomeField />
    }
  }
    return (
    <div className={styles.EnterField}>
      <AppName />
      {showBlock()}
    </div>
  )
}

export default EnterField
