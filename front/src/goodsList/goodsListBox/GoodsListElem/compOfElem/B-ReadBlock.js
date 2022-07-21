import React  from 'react'
import styles from '../GoodsListElements.module.scss'

function ReadBlock(props) {
  const { textGood, numberGood, unitGood, id } = props.goodInfo 
  // console.log('[props.goodInfo ]:', props.goodInfo )
  const goodText = `${textGood} ${numberGood} ${unitGood}`
  // console.log('[goodText ]:', goodText )

  return (
    <div className={`${styles.BodyOfElem}`} id={id}>
      <p 
        className={`${styles.element} ${styles.text}`}
        value={goodText}> {goodText}
      </p>

      <div 
        className={`${styles.element} ${styles.icon} ${styles.edit}`}
        onClick={null} > 
      </div>
    </div>
  )
}

export default ReadBlock