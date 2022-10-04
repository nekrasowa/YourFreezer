import React from "react"
// import styles from './ModifyElement.module.scss'
import globalStyles from '../globalStyles.module.scss'

function ModifyElement() {
  return (
    <>
      <div className={` ${globalStyles.FreezerOneInput}`}>
        <input className={`${globalStyles.FreezerInput__name}`} />
        <div className={`${globalStyles.FreezerElement__cross} ${globalStyles.FreezerInput__cross}`}></div>
        <div className={`${globalStyles.FreezerElement__numContainer}`}>
          <input 
          className={`${globalStyles.FreezerInput__number}`} 
          type='number'
          />
          <div className={`${globalStyles.plus}`}></div>
          <div className={`${globalStyles.minus}`}></div>
        </div>
        
        <form className={`${globalStyles.FreezerInput__form}`}>
          <label>
            <input
              type='radio'
              name='radio'
              value='kg'
            />
            <span className={`${globalStyles.FreezerInput__span_kg}`}>kg</span>
          </label>
          <label>
            <input
              type='radio'
              name='radio'
              value='pcs'
            />
            <span className={`${globalStyles.FreezerInput__span_pcs}`}>pcs</span>
          </label>
        </form>
        <input className={`${globalStyles.FreezerInput__submit}`}
          id={`${globalStyles.FreezerInput__submit}`}
          type='submit'
          value={` `}
        /> 
        
      </div>

    </>
  )
}

export default ModifyElement
