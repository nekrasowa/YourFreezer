import React from 'react'
import './background.css'
import backgroundImg from './freezer-img.jpg'

function BackImg(props) {
  console.log(props.url)
  return (
    <div className='Background'>
      <img className='BackImg' src={backgroundImg} alt='BackImg'/>
    </div>
  )
}

export default BackImg
