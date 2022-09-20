import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { checkUserData } from '../../redux/thunks/thunksEnterField/checkUserData'
import { changeStyle, correctInputStyle } from '../helpFunctions/changeStyle'
import styles from '../AuthField/AuthField.module.scss'
import globalStyles from '../EnterField.module.scss'
import { checkEmail, checkPass } from '../helpFunctions/checkData'
import { showError, hideError } from '../../redux/actions/actionsError'
import _ from 'lodash/lang'

function AuthField() {
  const dispatch = useDispatch()

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

  const [userPass, setUserPass] = useState('')
  const inputPassHandler = (e) => {
    setUserPass(e.target.value)
    dispatch(hideError())
  }

  const enterData = {
    userEmail,
    userPass
  }

  const isDataCorrect = useSelector((state) => state.isError.error)


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!_.isEmpty(isDataCorrect)) {
      const errorMassage = 'Data is not correct!'
      dispatch(showError(errorMassage))
      return
    }
    dispatch(hideError())
    dispatch(checkUserData(enterData))
  }
  return (
    <>
      <div className={`${styles.AuthField}`}>
        <form className={`${styles.AuthForm}`} 
        onSubmit={handleSubmit}>
          <input 
            className={changeStyle(checkEmail, userEmail)}
            type='email'
            placeholder='email'
            autoFocus 
            value={userEmail}
            onChange={inputEmailHandler}
            />
          <input 
            className={correctInputStyle}
            type='password'
            placeholder='password'
            value={userPass}
            onChange={inputPassHandler}
            />
          <button
            className={`${styles.AuthForm__submit} ${globalStyles.submit}`} 
            type='submit'
            value='Send'

          >Send</button>
        </form>
      </div>
    </>
  )
}

export default AuthField
