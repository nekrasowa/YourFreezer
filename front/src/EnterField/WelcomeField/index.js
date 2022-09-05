import React from 'react'
import styles from './WelcomeField.module.scss'

function WelcomeField() {
  return (
    <div className={`${styles.WelcomeField}`}>
      <p className={`${styles.WelcomeField__paragraph}`}>Welcome to</p>
    </div>
  )
}

export default WelcomeField