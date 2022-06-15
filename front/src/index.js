import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const goods = [
  {
    id: 1,
    text: 'bananas' 
  },
  {
    id: 2,
    text: 'apple'
  }
]


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App goods={goods}/>
  </React.StrictMode>
)
