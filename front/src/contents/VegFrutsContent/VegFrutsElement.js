import React from "react"
import styles from './VegFrutsContents.module.scss'
import globalStyles from '../globalStyles.module.scss'

function VegFrutsContent() {
  return (
    <>
      <div className={`${globalStyles.FreezerOneElement} ${styles.VegFrutsContent__VegFrutsElement} `}>
        <p className={`${globalStyles.FreezerElement__name}`}>go0od</p>
        <p className={`${globalStyles.FreezerElement__info}`}>1 pcs</p>     
      </div>
    </>
  )
}

export default VegFrutsContent

