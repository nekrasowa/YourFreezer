import React from 'react'
import styles from '../GoodsListElements.module.scss'
import { useDispatch } from 'react-redux'
import { deleteOneGood } from '../../../../redux/thunks/deleteOneGood'

function DeleteBTN(props) {
  const id = props.id

  const dispatch = useDispatch()
  const onClickHandler = () => {
    dispatch(deleteOneGood(id))
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