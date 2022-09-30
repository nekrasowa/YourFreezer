import React from "react"
import styles from './FreezerContent.module.scss'
import globalStyles from '../globalStyles.module.scss'
import FreezerElement from './FreezerElement'

function FreezerContent() {
  return (
    <>
      <div className={`${styles.FreezerContent}`}>
        <div className={`${globalStyles.FreezerBackground} ${styles.FreezerContent__freezerBackground}`} />
        <div className={`${globalStyles.FreezerElements} ${styles.FreezerContent__freezerElements} `}>
          <FreezerElement />
          <FreezerElement />
          <FreezerElement />
          <FreezerElement />
          <FreezerElement />
          <FreezerElement />
        </div>
      </div>
    </>
  )
}

export default FreezerContent
