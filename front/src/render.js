import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

export const rerenderEntireTree = (goods, deleteElementFromList) => {

  root.render(
  <React.StrictMode>
    <App goods={goods} deleteElementFromList={deleteElementFromList}/>
  </React.StrictMode>
)}
