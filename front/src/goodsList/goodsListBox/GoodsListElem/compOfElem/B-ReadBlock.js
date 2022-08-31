import React from 'react'
import styles from '../GoodsListElements.module.scss'
import { useDispatch } from 'react-redux'
import { editGoodAction } from '../../../../redux/actions/actionsGoodsList'

function ReadBlock(props) {
  let { textGood, numberGood, unitGood, id } = props.goodInfo.info
  const { isChecked } = props.goodInfo.states
  if(numberGood === null) {
    numberGood = ''
  }
  const goodText = `${textGood} ${numberGood} ${unitGood}`

  const dispatch = useDispatch()
  const editClickHandler = () => {
    dispatch(editGoodAction(id))
  }

  return (
    <div className={`${styles.BodyOfElem}`} id={id}>
      <p
        className={isChecked
          ? `${styles.element} ${styles.text} ${styles.wasChecked}`
          : `${styles.element} ${styles.text}`}
        value={''}> {goodText}
      </p>

      <div
        className={`${styles.element} ${styles.icon} ${styles.edit}`}
        onClick={editClickHandler} >
      </div>
    </div>
  )
}

export default ReadBlock