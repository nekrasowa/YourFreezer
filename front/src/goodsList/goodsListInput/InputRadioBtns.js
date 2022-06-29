import React from 'react'
import styles from './GoodsListInput.module.scss'

function InputRadioBtns(props) {
  // const id = 'unit'
  // const newValue = React.createRef()

    return (
    <>
      <div className={`${styles.InputRadioBtns}`}>
        <div className={`${styles.container}`}>
          <form>
            <label>
              <input 
                type='radio' 
                name='radio' 
                onChange={null}
                />
              <span>kilo</span>
            </label>
            <label>
              <input 
                type='radio' 
                name='radio' 
                onChange={null}
              />
              <span>pcs</span>
            </label>
          </form>
        </div>
      </div>
    </>
  )
}

export default InputRadioBtns
