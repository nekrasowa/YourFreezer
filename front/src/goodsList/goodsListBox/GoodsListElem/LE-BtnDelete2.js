import React from 'react'
import styles from './GoodsListElements.module.scss'
import { connect } from 'react-redux'

function BtnDelete(props) {
  const deleteHandler = props.dispatch
  const id = props.id
  
  function deleteElement() {
    const action = {
      type: 'DELETE',
      parantsId: id
    }
    deleteHandler(action)
  }
  return (
    <div 
      className={`${styles.element} ${styles.icon} ${styles.delete}`}
      onClick={deleteElement}
    ></div>
  )
}

function mapStateToProps(state) {
  console.log('[state]:', state)
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
export default connect(mapStateToProps, mapDispatchToProps)(BtnDelete)
