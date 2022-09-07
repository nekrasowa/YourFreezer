import React from 'react'
import { showAuthField } from '../../redux/actions/actionsEnter'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import styles from './RegisterField.module.scss'
import globalStyles from '../EnterField.module.scss'
import { checkEmail, checkTel, checkPass } from './checkData'
import { showError, hideError } from '../../redux/actions/actionsError'

function RegisterField() {
  const dispatch = useDispatch()

  const correctInputStyle = `${styles.RegisterForm__inputField} ${globalStyles.Form__inputField}`
  const wrongInputStyle = `${styles.RegisterForm__inputField} ${globalStyles.Form__inputField} ${styles.RegisterForm__inputField_wrongInput}`

  const [userName, setUserName] = useState('')
  const inputNameHandler = (e) => {
    setUserName(e.target.value)
  }

  const [userEmail, setUserEmail] = useState('')
  const inputEmailHandler = (e) => {
    setUserEmail(e.target.value)
    if (!checkPass(userEmail)) {
      const errorMassage = 'Input email in correct form'
      dispatch(showError(errorMassage))
      return
    }
    dispatch(hideError())
  }
  const changeEmailStyle = () => {
    if (!checkEmail(userEmail) && userEmail !== '') {
      return wrongInputStyle
    }
    return correctInputStyle
  }

  // console.log('(true?)>>', )

  const [userTel, setUserTel] = useState('')
  const inputTelHandler = (e) => {
    setUserTel(e.target.value)
    if (!checkPass(userTel)) {
      const errorMassage = 'Input tel number in correct form'
      dispatch(showError(errorMassage))
      return
    }
    dispatch(hideError())
  }
  const changeTelStyle = () => {
    if (!checkTel(userTel) && userTel !== '') {
      return wrongInputStyle
    }
    return correctInputStyle
  }

  const [userPass, setUserPass] = useState('')
  const inputPassHandler = (e) => {
    setUserPass(e.target.value)
    if (!checkPass(userPass)) {
      const errorMassage = 'Input pass with number, letter in upper case, at least 6 characters'
      dispatch(showError(errorMassage))
      return
    }
    dispatch(hideError())
  }
  const changePassStyle = () => {
    if (!checkPass(userPass) && userPass !== '') {
      return wrongInputStyle
    }
    return correctInputStyle
  }

  // const userData = {
  //   userName,
  //   userEmail,
  //   userTel,
  //   userPass
  // }
  // console.log('userData>>', userData)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(hideError())

    // dispatch(showAuthField())
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
          className={changeEmailStyle()}
          type='email'
          placeholder='email'
          value={userEmail}
          onChange={inputEmailHandler}
        />
        <input
          className={changeTelStyle()}
          type='tel'
          placeholder='tel number'
          value={userTel}
          onChange={inputTelHandler}
        />
        <input
          className={changePassStyle()}
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