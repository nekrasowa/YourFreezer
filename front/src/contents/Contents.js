import React from 'react'
import styles from './Contents.module.scss'
import BasicContents from './BasicContents/BasicContents'
import VegFrutsContents from './VegFrutsContents/VegFrutsContents'
import FreezerContents from './FreezerContents/FreezerContents'

function Contents(props) {

  return (
    <div className={`${styles.Contents}`}>
      <BasicContents />
      <VegFrutsContents />
      <FreezerContents />
    </div>
  )
}

export default Contents