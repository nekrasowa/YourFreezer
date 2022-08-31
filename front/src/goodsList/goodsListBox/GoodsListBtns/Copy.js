import React from 'react'
import styles from './GoodsListBtns.module.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { connect } from 'react-redux'
// import {  }

function Copy(props) {
  
  return (        
    <div className={`${styles.Copy}`}>
      <CopyToClipboard
        text={'text'}
        onCopy={() => {console.log('is copied')}}>
        <button 
          type='button' 
          id={`${styles.CopyBtn}`}
          onClick={null}
          />
      </CopyToClipboard>
      
    </div>  
    )
}

function mapStateToProps(state) {
  return {
    copyText: state.copyText
  }
}

function mapDispatchToProps(dispatch) {

  return {
    onCopyList: () => {
      const action = {
        type: 'COPY',
      }
      dispatch(action)
  }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Copy)