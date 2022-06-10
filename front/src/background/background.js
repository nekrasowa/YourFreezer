import React from 'react'
import styles from './Background.module.css'
import backgroundImg from './freezer-img.jpg'

function BackImg() {
  return (
    <div>
      <div className={`${styles.Background}`}>  
        <img className={`${styles.BackImg}`} src={backgroundImg} alt='BackImg'/>
      </div>
    </div>
  )
}

export default BackImg
