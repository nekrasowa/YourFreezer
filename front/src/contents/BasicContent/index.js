import React from "react"
import styles from './BasicContent.module.scss'
import BasicElement from './BasicElement'

function BasicContent() {
  return (
    <>
      <div className={`${styles.BasicContent} `}>
        <div className={`${styles.BasicContent__basicBackground}`} />
        <div className={`${styles.BasicContent__basicElements}`}>
          <BasicElement />
          <BasicElement />
          <BasicElement />
          <BasicElement />
          <BasicElement />
          <BasicElement />
          <BasicElement />
          <BasicElement />
          <BasicElement />
          <BasicElement />
          <BasicElement />
          <BasicElement />
          <BasicElement />
          <BasicElement />
          <BasicElement />
          <BasicElement />
          <BasicElement />
          <BasicElement />
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
