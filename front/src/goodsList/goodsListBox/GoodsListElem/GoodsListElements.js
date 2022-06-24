import React from 'react'
import styles from './GoodsListElements.module.scss'
import ListElement from './ListElement'

function GoodsListElements(props) {
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  const listElements = props.state.goods
    .map(g => <ListElement
          id={g.id}
          text={g.text}
          isChecked={g.isChecked}
          wasClickedEdit={g.wasClickedEdit}
          inputText={g.inputText}
          metodList={props.metodList}
          key={getRandomArbitrary(1, 1000)}/>
        )
  return (
    <div className={`${styles.BoxElements}`}>
      {listElements}
    </div>
  )
}

export default GoodsListElements
