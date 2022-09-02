import React from "react"
import styles from './AuthField.module.scss'
import globalStyles from '../EnterField.module.scss'


function AuthField() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <div className={`${styles.AuthField}`}>
        <form className={`${styles.AuthForm}`} 
        onSubmit={handleSubmit}>
          <input 
            className={`${styles.AuthForm__inputField} ${styles.AuthForm__inputField_mail} ${globalStyles.Form__inputField}`} 
            type='email'
            placeholder='email'
            autoFocus 
            />
          <input 
            className={`${styles.AuthForm__inputField} ${styles.AuthForm__inputField_pass} ${globalStyles.Form__inputField}`}
            type='password'
            placeholder='password'
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
