import React  from 'react'
import styles from './GoodsListElements.module.scss'
import CheckBox from './compOfElem/CheckBox'
import BodyOfElem from './compOfElem/BodyOfElem'
import DeleteBTN from './compOfElem/DeleteBTN'

function ListElement(props) {

  return (
    <>
      <div className={`${styles.ListElement}`}>
        <CheckBox />
        <BodyOfElem goodInfo={props.goodInfo}/>
        <DeleteBTN />
      </div>
    </>
  )
}

export default ListElement

