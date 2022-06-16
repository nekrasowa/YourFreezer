import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const goods = [
  {id: 1, text: 'bananas'},
  {id: 2, text: 'apple'},
  {id: 3, text: 'meat'},
  {id: 4, text: 'pork'},
  
]

const deleteElementOfList = (id) => {
  console.log('[elementOfGoods]:', id)
  // console.log('[elementOfGoods]:', elem)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App goods={goods} deleteElementOfList={deleteElementOfList}/>
  </React.StrictMode>
)
