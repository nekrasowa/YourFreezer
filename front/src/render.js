import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

export const rerenderEntireTree = (store) => {

  root.render(
  <React.StrictMode>
    <App store={store} dispatch={store.dispatch.bind(store)}/>
  </React.StrictMode>
)}
