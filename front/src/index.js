import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import goods from '../../back/goods'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App goods={goods}/>
  </React.StrictMode>
)
