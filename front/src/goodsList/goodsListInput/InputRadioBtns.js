import React from 'react'
import styles from './GoodsListInput.module.scss'

function InputRadioBtns(props) {
  const kiloChecked = React.createRef()
  const pcsChecked = React.createRef()
  const onChangeHandler = () => {
    const kilo = 'kilo'
    const pcs = 'pcs'

    const isChecked = () => {
      if (kiloChecked.current.checked) {
        return kilo
      }
      if (pcsChecked.current.checked) {
        return pcs
      }
      return null
    }

    const action = {
      type: 'UPDATE-ADD-INPUT',
      subtype: 'UNIT',
      newInput: isChecked()
    }

    props.dispatch(action)
    // console.log(kiloChecked.current.checked)
    // console.log(pcsChecked.current.checked)
  }

  const isKilo = () => {
    if (props.unit === 'kilo') {
      return true
    }
    return false
  }
  const isPcs = () => {
    if (props.unit === 'pcs') {
      return true
    }
    return false
  }

    return (
    <>
      <div className={`${styles.InputRadioBtns}`}>
        <div className={`${styles.container}`}>
          <form
            onChange={onChangeHandler}
          >
            <label>
              <input 
                type='radio' 
                name='radio' 
                value='kilo'
                ref={kiloChecked}
                defaultChecked={isKilo}
              />
              <span>kilo</span>
            </label>
            <label>
              <input 
                type='radio' 
                name='radio'
                value='pcs'
                ref={pcsChecked}
                defaultChecked={isPcs}
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
