import React from 'react'
import { useSelector } from 'react-redux'
import styles from './EnterField.module.scss'
import AppName from '../Background/AppName'
import BtnsField from './BtnsField'
import RegisterField from './RegisterField'
import AuthField from './AuthField'
import WelcomeField from './WelcomeField'


function EnterField(props) {
  const stateEnter = useSelector((state) => state.enter.stateEnter)

  const showBlock = () => {
    if (stateEnter === 'showBtns') {
      return <BtnsField />
    }
    if (stateEnter === 'showRegisterField') {
      return <RegisterField />
    }
    if (stateEnter === 'showAuthField') {
      return <AuthField />
    }
    if (stateEnter === 'showWelcomeField') {
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
