import React from 'react'
import styles from './GoodsListBtns.module.scss'

function Delete(props) {
  const clickHandler = () => {
    const action = {
      type: 'DELETE-ALL'
    }
    props.dispatch(action)
  }

  return (        
    <div className={`${styles.Delete}`}>
      <button 
        type='button' 
        id={`${styles.DeleteBtn}`}
        onClick={clickHandler}
        />
    </div>
  )
}

export default Delete