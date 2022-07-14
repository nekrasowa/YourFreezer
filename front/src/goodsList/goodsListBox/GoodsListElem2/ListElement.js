import React  from 'react'
import styles from './GoodsListElements.module.scss'
import CheckBox from './compOfElem/CheckBox'
import BodyOfElem from './compOfElem/BodyOfElem'
import DeleteBTN from './compOfElem/DeleteBTN'

function ListElement(props) {

  return (
    <>
      <div lassName={`${styles.ListElement}`}>
        <CheckBox />
        <BodyOfElem />
        <DeleteBTN />
      </div>
    </>
  )
}

export default ListElement

