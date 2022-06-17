import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

export const rerenderEntireTree = (goods, listMetods) => {

  root.render(
  <React.StrictMode>
    <App goods={goods} listMetods={listMetods}/>
  </React.StrictMode>
)}
