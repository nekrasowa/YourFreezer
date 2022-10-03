import React from "react"
import styles from './BasicContent.module.scss'
import globalStyles from '../globalStyles.module.scss'

function BasicElement() {
  return (
    <>
      <div className={` ${globalStyles.FreezerOneElement} ${styles.BasicContent__basicElement}`}>
        <p className={`${globalStyles.FreezerElement__name}`}>go00000od</p>
        <p className={`${globalStyles.FreezerElement__info}`}>1 pcs</p>
        <div className={`${globalStyles.FreezerElement__cross}`}></div>

      </div>
    </>
  )
}

export default BasicElement
