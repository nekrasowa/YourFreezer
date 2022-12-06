import React, { useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../GoodsListBtns.module.scss'
import { createFreezContentAction } from '../../../../redux/actions/actionsGoodsList'

function RowOfTable(props) {
  const dispatch = useDispatch()

  const [type, setType] = useState('')
  const handleInputType = (e) => {
    setType(e.target.value)

    const contentsData = {
        goodName: props.info.textGood,
        goodNumber: props.info.numberGood,
        goodUnit: props.info.unitGood,
        typeOfGood: e.target.value,
        id: props.info.id
      }
      console.log('contentsData>>>', contentsData)
    dispatch(createFreezContentAction(contentsData))
  }

  return (
    <form className={`${styles.RowOfTable}`}
      onChange={handleInputType}>

      <div className={`${styles.nameOfGood}`}> 
        {props.info.textGood}
      </div>

      <input
        className={`${styles.checkbox} ${styles.checkbox_basic}`}
        type='radio'
        name='radio'
        value='basic'
        
        />
      <input
        className={`${styles.checkbox} ${styles.checkbox_vegFrut}`}
        type='radio' 
        name='radio'
        value='vegFruts'
        />
      <input
        className={`${styles.checkbox} ${styles.checkbox_freezer}`}
        type='radio'
        name='radio'
        value='freezer'
        />

    </form>
  )
}

export default RowOfTable