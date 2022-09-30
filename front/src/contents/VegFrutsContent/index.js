import React from "react"
import styles from './VegFrutsContents.module.scss'
import globalStyles from '../globalStyles.module.scss'
import VegFrutsElement from './VegFrutsElement'

function VegFrutsContent() {
  return (
    <>
     <div className={`${styles.VegFrutsContent} `}>
        <div className={`${globalStyles.FreezerBackground} ${styles.VegFrutsContent__vegFrutsBackground} `} />
        <div className={`${globalStyles.FreezerElements} ${styles.VegFrutsContent__vegFrutsElements} `}>
          <VegFrutsElement />
          <VegFrutsElement />
          <VegFrutsElement />
          <VegFrutsElement />
          <VegFrutsElement />
          <VegFrutsElement /> 
        </div>
      </div>
    </>
  )
}

export default VegFrutsContent

