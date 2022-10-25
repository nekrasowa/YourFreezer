import React from 'react'
import { useDispatch } from 'react-redux'
import { showInputField } from '../../redux/actions/actionsContent'

// import styles from './AddBtn.module.scss'
import globalStyles from '../globalStyles.module.scss'

function AddBtn() {
  const dispatch = useDispatch()

  const onClickHandler = () => {
    dispatch(showInputField())
  }

  return (
    <>
      <button 
        className={`${globalStyles.FreezerContent__AddBtn}`}
        onClick={onClickHandler}
        >
      </button>
    </>
  )
}

export default AddBtn
