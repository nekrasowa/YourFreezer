import React from 'react'
// import { showAuthField } from '../../redux/actions/actionsEnter'
import { createNewUser } from '../../redux/thunks/thunksEnterField/createNewUser'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import _ from 'lodash/lang'
import styles from './RegisterField.module.scss'
import globalStyles from '../EnterField.module.scss'
import { checkEmail, checkTel, checkPass } from '../helpFunctions/checkData'
import { showError, hideError } from '../../redux/actions/actionsError'
import { changeStyle } from '../helpFunctions/changeStyle'

function RegisterField() {
  const dispatch = useDispatch()
  // dispatch(showError(''))

  const [userName, setUserName] = useState('')
  const inputNameHandler = (e) => {
    setUserName(e.target.value)
  }

  const [userEmail, setUserEmail] = useState('')
  const inputEmailHandler = (e) => {
    setUserEmail(e.target.value)
    if (!checkEmail(e.target.value)) {
      const errorMessage = 'Input email in correct form'
      dispatch(showError(errorMessage))
      return
    }
    dispatch(hideError())
  }

  const [userTel, setUserTel] = useState('')
  const inputTelHandler = (e) => {
    setUserTel(e.target.value)
    if (!checkPass(e.target.value)) {
      const errorMessage = 'Input tel number in correct form'
      dispatch(showError(errorMessage))
      return
    }
    dispatch(hideError())
  }

  const [userPass, setUserPass] = useState('')
  const inputPassHandler = (e) => {
    setUserPass(e.target.value)
    if (!checkPass(e.target.value)) {
      const errorMessage = 'Input pass with number, letter in upper case, at least 6 characters'
      dispatch(showError(errorMessage))
      return
    }
    dispatch(hideError())
  }
  
  const userData = {
    userName,
    userEmail,
    userTel,
    userPass
  }

  // console.log('userData>>', userData)
  const isDataCorrect = useSelector((state) => state.isError.error)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!_.isEmpty(isDataCorrect)) {
      const errorMessage = 'Data is not correct!'
      dispatch(showError(errorMessage))
      return
    }
    dispatch(hideError())
    dispatch(createNewUser(userData))
  }

  return (
    <div className={`${styles.RegisterField}`}>
      <form className={`${styles.RegisterForm}`}
        onSubmit={handleSubmit}
      >
        <input
          className={`${styles.RegisterForm__inputField} ${globalStyles.Form__inputField}`}
          type='text'
          autoFocus
          placeholder='name'
          value={userName}
          onChange={inputNameHandler}
        />
        <input
          className={changeStyle(checkEmail, userEmail)}
          type='email'
          placeholder='email'
          value={userEmail}
          onChange={inputEmailHandler}
        />
        <input
          className={changeStyle(checkTel, userTel)}
          type='tel'
          placeholder='tel number'
          value={userTel}
          onChange={inputTelHandler}
        />
        <input
          className={changeStyle(checkPass, userPass)}
          type='password'
          placeholder='password'
          value={userPass}
          onChange={inputPassHandler}
        />
        <button
          className={`${styles.Register__submit} ${globalStyles.submit}`}
          type='submit'
          value='send'
        >Send</button>
      </form>
    </div>
  )
}

export default RegisterField