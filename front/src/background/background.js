import React from 'react'
import './Background.css'
import backgroundImg from './freezer-img.jpg'

function BackImg() {
  return (
    <div>
      <div className='Background'>  
        <img className='BackImg' src={backgroundImg} alt='BackImg'/>
      </div>
    </div>
  )
}

export default BackImg
