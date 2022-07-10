import React from 'react'
import styles from './GoodsListElements.module.scss'
import ListElement from './ListElement'

function GoodsListElements(props) {
  const state = props.store.getState()

  const listElements = state.goods
    .map(g => <ListElement
          id={g.id}
          text={g.text}
          number={g.number}
          unit={g.unit}
          isChecked={g.isChecked}
          wasClickedEdit={g.wasClickedEdit}
          change={g.change}
          dispatch={props.dispatch}
          key={g.id}/>
        )
  return (
    <div className={`${styles.BoxElements}`}>
      {listElements}
    </div>
  )
}

export default GoodsListElements
