import React from 'react'
import styles from '../GoodsListElements.module.scss'
import { useDispatch } from 'react-redux'
import { deleteGood } from '../../../../redux/actions/actionsGoodsList'

function DeleteBTN(props) {
  const id = props.id

  const dispatch = useDispatch()
  const onClickHandler = () => {
    dispatch(deleteGood(id))
  }
  return (
    <>
      <div
        className={`${styles.element} ${styles.icon} ${styles.delete}`}
        onClick={onClickHandler}
      ></div>
    </>
  )
}

export default DeleteBTN