import React from "react"
import styles from './FreezerContent.module.scss'
import globalStyles from '../globalStyles.module.scss'

function FreezerElement() {
  return (
    <>
      <div className={` ${globalStyles.FreezerOneElement} ${styles.FreezerContent__freezerElement}`}>
        <p className={`${globalStyles.FreezerElement__name}`}>go00000od</p>
        <p className={`${globalStyles.FreezerElement__info}`}>1 pcs</p>
        <div className={`${globalStyles.FreezerElement__cross}`}></div>
      </div>
    </>
  )
}

export default FreezerElement
