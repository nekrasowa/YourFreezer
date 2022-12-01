import React from 'react'
import { useDispatch } from 'react-redux'
import { showInputField } from '../../redux/actions/actionsContent'
import globalStyles from '../globalStyles.module.scss'
import styles from '../VegFrutsContent/VegFrutsContents.module.scss'

function AddBtn(props) {
  const dispatch = useDispatch()
  const onClickHandler = () => {
    dispatch(showInputField(props.typePlace))
  }

  const addBtnType = () => {
    if(props.typePlace === 'vegFruts') {
      return `${globalStyles.FreezerContent__AddBtn} ${styles.VegFrutsContent__AddBtn_vegFruts}`
    }
    return `${globalStyles.FreezerContent__AddBtn}`
  }

  return (
    <>
      <button 
        className={addBtnType()}
        onClick={onClickHandler}
        >
      </button>
    </>
  )
}

export default AddBtn
