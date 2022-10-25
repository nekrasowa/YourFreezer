import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './BasicContent.module.scss'
import globalStyles from '../globalStyles.module.scss'


function EditingElement(props) {



  return (
    <>
      <div className={`${globalStyles.EditingElement}`}>
        <input
          className={`${globalStyles.EditingElement__input__name}`}
         />
        <input
          className={`${globalStyles.EditingElement__input__number}`}
         />
        <p className={`${globalStyles.EditingElement__input__unit_kg} ${globalStyles.EditingElement__input__unit_notActiv}`}>
          {'kg'} 
        </p> 
        <p className={`${globalStyles.EditingElement__input__unit_pcs}`}>
          {'pcs'} 
        </p> 
        <div 
          className={`${globalStyles.EditingElement__tick}`}
          // onClick={onClickHandler}
          ></div>
      </div>
    </>
  )
}

export default EditingElement

