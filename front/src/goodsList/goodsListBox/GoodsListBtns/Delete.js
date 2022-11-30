import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './GoodsListBtns.module.scss'
import { onClickDeleteHandler } from './handlerFunc/onClickDeleteHandler'

function Delete(props) {
  const dispatch = useDispatch()
  
  const onClickHandler = () => {
    onClickDeleteHandler(dispatch)
  }

  return (        
    <div className={`${styles.Delete}`}>
      <button 
        type='button' 
        id={`${styles.DeleteBtn}`}
        onClick={onClickHandler}
        />
    </div>
  )
}

export default Delete