import React from "react"
import styles from './BasicContent.module.scss'

function BasicElement() {
  return (
    <>
      <div className={`${styles.BasicContent__basicElement}`}>
        <p className={`${styles.BasicContent__basicElement__name}`}>go00000od</p>
        <p className={`${styles.BasicContent__basicElement__info}`}>1 pcs</p>
      </div>
    </>
  )
}

export default BasicElement
