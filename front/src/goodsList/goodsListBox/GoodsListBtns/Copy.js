import React from 'react'
import styles from './GoodsListBtns.module.scss'
import {CopyToClipboard} from 'react-copy-to-clipboard'

function Copy(props) {
  const clickHandler = () => {
    const action = {
      type: 'COPY'
    }
    props.dispatch(action)
  }

  return (        
    <div className={`${styles.Copy}`}>
      <CopyToClipboard
        text={props.copyText}
        onCopy={() => {console.log('is copied')}}>
        <button 
          type='button' 
          id={`${styles.CopyBtn}`}
          onClick={clickHandler}
          />
      </CopyToClipboard>
      
    </div>  
    )
}

export default Copy