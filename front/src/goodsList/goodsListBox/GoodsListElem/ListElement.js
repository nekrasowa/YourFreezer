import React  from 'react'
import styles from './GoodsListElements.module.scss'
import CheckBox from './compOfElem/CheckBox'
import BodyOfElem from './compOfElem/BodyOfElem'
import DeleteBTN from './compOfElem/DeleteBTN'

function ListElement(props) {
  const id = props.goodInfo.state.id
  return (
    <>
      <div className={`${styles.ListElement}`}>
        <CheckBox id={props.goodInfo.info.id} isChacked={id}/>
        <BodyOfElem goodInfo={props.goodInfo}/>
        <DeleteBTN id={id}/>
      </div>
    </>
  )
}

export default ListElement

