import React from 'react'
import styles from './RegisterField.module.scss'
import globalStyles from '../EnterField.module.scss'

function RegisterField() {
  const handleSubmit = (e) => {
    e.preventDefault()
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
            />
          <input 
            className={`${styles.RegisterForm__inputField} ${globalStyles.Form__inputField}`}
            type='email'
            placeholder='email'
            />
          <input 
            className={`${styles.RegisterForm__inputField} ${globalStyles.Form__inputField}`}
            type='tel'
            placeholder='tel number'
            />
          <input 
            className={`${styles.RegisterForm__inputField} ${globalStyles.Form__inputField}`}
            type='password'
            placeholder='password'
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