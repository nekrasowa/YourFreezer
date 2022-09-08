import styles from '../RegisterField/RegisterField.module.scss'
import globalStyles from '../EnterField.module.scss'

export const correctInputStyle = `${styles.RegisterForm__inputField} 
  ${globalStyles.Form__inputField}`

const wrongInputStyle = `${styles.RegisterForm__inputField} 
  ${globalStyles.Form__inputField} 
  ${styles.RegisterForm__inputField_wrongInput}`

export const changeStyle = (checkFunc, userData) => {
  if (!checkFunc(userData) && userData !== '') {
    return wrongInputStyle
  }
  return correctInputStyle
}
