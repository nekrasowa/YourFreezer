import React from 'react'
import styles from './GoodsListInput.module.scss'

function InputRadioBtns(props) {
  const kiloChecked = React.createRef()
  const pcsChecked = React.createRef()
  
    return (
    <>
      <div className={`${styles.InputRadioBtns}`}>
        <div className={`${styles.container}`}>
          <form
            onChange={null}
          >
            <label>
              <input 
                type='radio' 
                name='radio' 
                value='kilo'
                ref={kiloChecked}
                defaultChecked={true}
              />
              <span>kilo</span>
            </label>
            <label>
              <input 
                type='radio' 
                name='radio'
                value='pcs'
                ref={pcsChecked}
                defaultChecked={false}
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
