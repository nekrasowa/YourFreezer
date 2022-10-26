import React from 'react'
import { useDispatch } from 'react-redux'
import { showInputField } from '../../redux/actions/actionsContent'
import globalStyles from '../globalStyles.module.scss'

function AddBtn(props) {
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
