import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

export const rerenderEntireTree = (state, metodList) => {

  root.render(
  <React.StrictMode>
    <App state={state} metodList={metodList}/>
  </React.StrictMode>
)}
