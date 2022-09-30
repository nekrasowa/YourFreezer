import React from "react"
import styles from './BasicContent.module.scss'
import globalStyles from '../globalStyles.module.scss'
import BasicElement from './BasicElement'

function BasicContent() {
  return (
    <>
      <div className={`${styles.BasicContent} `}>
        <div className={`${globalStyles.FreezerBackground} ${styles.BasicContent__basicBackground}`} />
        <div className={`${globalStyles.FreezerElements} ${styles.BasicContent__basicElements} `}>
          <BasicElement />
          <BasicElement />
          <BasicElement />
          <BasicElement />
          <BasicElement />
        </div>
      </div>
    </>
  )
}

export default BasicContent
