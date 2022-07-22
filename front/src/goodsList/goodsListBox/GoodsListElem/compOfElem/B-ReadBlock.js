import React  from 'react'
import styles from '../GoodsListElements.module.scss'

function ReadBlock(props) {
  const { textGood, numberGood, unitGood, id, isChacked } = props.goodInfo 
  // console.log('[props.goodInfo ]:', props.goodInfo )
  const goodText = `${textGood} ${numberGood} ${unitGood}`
  // console.log('[goodText ]:', goodText )
  
  return (
    <div className={`${styles.BodyOfElem}`} id={id}>
      <p 
        className={isChacked 
        ? `${styles.element} ${styles.text} ${styles.wasChecked}`
        : `${styles.element} ${styles.text}`}
        value={''}> {goodText}
      </p>

      <div 
        className={`${styles.element} ${styles.icon} ${styles.edit}`}
        onClick={null} > 
      </div>
    </div>
  )
}

export default ReadBlock