import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './GoodsListBtns.module.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { connect } from 'react-redux'
import { onCopyFuncHandler } from './handlerFunc/onCopyFuncHandler'
import { hideError, showError } from '../../../redux/actions/actionsError'

function Copy(props) {
  const dispatch = useDispatch()

  const goodsList = useSelector((state) => state.createGood.goods)

  const onCopyHandler = () => {
    console.log(goodsList.lenght )
    if(!goodsList.lenght) {
      dispatch(showError('Your list is empty'))
      return
    }
    dispatch(hideError())
    return onCopyFuncHandler(goodsList)
  }

  return (        
    <div className={`${styles.Copy}`}>
      <CopyToClipboard
        text={'text'}
        onCopy={onCopyHandler}>
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