import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import styles from './BasicContent.module.scss'
import globalStyles from '../globalStyles.module.scss'
import { saveBasicGood } from '../../redux/actions/actionsContent'

function EditingElement(props) {
  const dispatch = useDispatch()

  const {
    goodName,
    goodNumber,
    goodUnit,
    id,
    basicEditState
  } = props.goodInfo
  
  const styleOfUnit = (unit) => {
    if(goodUnit === unit) {
      return `globalStyles.EditingElement__input__unit_${unit} `
    }
    return `globalStyles.EditingElement__input__unit_${unit} ${globalStyles.EditingElement__input__unit_notActiv}`
  }
  
  const [ newGoodName, setNewGoodName ] = useState(goodName)
  const onChangeName = (e) => {

  }

  const [ newGoodNumber, setNewGoodNumber ] = useState(goodNumber)
  const onChangeNumber = (e) => {

  }

  const savedGoodData = {
    newGoodName: '',
    newGoodNumber: '',
    newGoodUnit: '',
  }

  const onClickHandler = () => {
    console.log('click')
    console.log('goodInfo', props.goodInfo)
    dispatch(saveBasicGood(savedGoodData))
  }

  return (
    <>
      <div className={`${globalStyles.EditingElement}`}>
        <input
          className={`${globalStyles.EditingElement__input__name}`}
          value={newGoodName}
          onChange={onChangeName}
         />
        <input
          className={`${globalStyles.EditingElement__input__number}`}
          value={newGoodNumber}
          onChange={onChangeNumber}

         />
        <p className={styleOfUnit('kg')}>
          kg
        </p> 
        <p className={styleOfUnit('pcs')}>
          pcs 
        </p> 
        <div 
          className={`${globalStyles.EditingElement__tick}`}
          onClick={onClickHandler}
          ></div>
      </div>
    </>
  )
}

export default EditingElement

