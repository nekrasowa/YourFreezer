import React  from 'react'
import ModifyBlock from './B-ModifyBlock'
import ReadBlock from './B-ReadBlock'


function BodyOfElem(props) {
  const editClicked = null
  

  return (
    <>
      {editClicked 
        ? <ModifyBlock />
        : <ReadBlock goodInfo={props.goodInfo}/>
      }
       
    </>
  )
}

export default BodyOfElem