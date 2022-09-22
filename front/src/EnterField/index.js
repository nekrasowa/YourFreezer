import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './EnterField.module.scss'
import AppName from '../Background/AppName'
import BtnsField from './BtnsField'
import RegisterField from './RegisterField'
import AuthField from './AuthField'
import WelcomeField from './WelcomeField'
import { showWelcomeField } from '../redux/actions/actionsEnter'

function EnterField(props) {
  const dispatch = useDispatch()
  const jwt = localStorage.getItem('jwt')
  useEffect(() => {
    if (jwt) {
      dispatch(showWelcomeField())
    }
  }, [dispatch, jwt])
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
  const changeStyle = () => {
    if (stateEnter !== 'showWelcomeField') {
      return styles.EnterField
    }
    return styles.EnterField_welcome
  }
  return (
    <div className={changeStyle()}>
      <AppName />
      {showBlock()}
    </div>
  )
}

export default EnterField
