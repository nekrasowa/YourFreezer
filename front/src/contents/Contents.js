import React from 'react'
import styles from './Contents.module.scss'
import BasicContent from './BasicContent'
import VegFrutsContent from './VegFrutsContent'
import FreezerContent from './FreezerContent'

function Contents(props) {

  return (
    <div className={`${styles.Contents}`}>
      <BasicContent />
      <VegFrutsContent />
      <FreezerContent />
    </div>
  )
}

export default Contents