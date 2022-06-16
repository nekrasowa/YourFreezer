import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { goods, deleteElementOfList } from './state'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App goods={goods} deleteElementOfList={deleteElementOfList}/>
  </React.StrictMode>
)
