import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

export const rerenderEntireTree = (goods, metodList) => {

  root.render(
  <React.StrictMode>
    <App goods={goods} metodList={metodList}/>
  </React.StrictMode>
)}
