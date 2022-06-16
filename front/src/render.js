import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

export const rerenderEntireTree = (goods, deleteElementFromList) => {

  const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App goods={goods} deleteElementFromList={deleteElementFromList}/>
  </React.StrictMode>
)}
