import React from "react"
import styles from './BasicContent.module.scss'
import globalStyles from '../globalStyles.module.scss'
import BasicElement from './BasicElement'
import ModifyElement from './ModifyElement'
import AddBtn from './AddBtn'

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
          <ModifyElement />
          <AddBtn />
        </div>
      </div>
    </>
  )
}

export default BasicContent
