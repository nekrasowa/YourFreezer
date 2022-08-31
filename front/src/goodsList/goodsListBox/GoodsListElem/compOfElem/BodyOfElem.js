import React from 'react'
import ModifyBlock from './B-ModifyBlock'
import ReadBlock from './B-ReadBlock'

function BodyOfElem(props) {
  const showBlock = () => {
    const fieldShow = props.goodInfo.states.fieldShow
    if (fieldShow === 'ModifyBlock') {
      return true
    }
    return false
  }
  return (
    <>
      {showBlock()
        ? <ModifyBlock goodInfo={props.goodInfo}/>
        : <ReadBlock goodInfo={props.goodInfo} />
      }

    </>
  )
}

export default BodyOfElem