import { rerenderEntireTree } from './render'

export const store = {
  _state: {
    goods: [
      {id: 1, text: 'bananas', isChecked: false, wasClickedEdit: true, inputText: ''},
      {id: 2, text: 'apple', isChecked: false, wasClickedEdit: true, inputText: ''},
      {id: 3, text: 'meat', isChecked: false, wasClickedEdit: true, inputText: ''},
      {id: 4, text: 'pork', isChecked: true, wasClickedEdit: true, inputText: ''},
    ],

  },
  _findGoodById(parantsId, opts = {}) {
    const {
      isIndex = false,
      isElement = false
    } = opts || {}
  
    const findId = (elem) => {
      if (elem.id === parantsId) {
        return parantsId
      }
      return undefined
    }
  
    if (isIndex) {
      return this._state.goods.findIndex(findId)
    }
    if (isElement) {
      return this._state.goods.find(findId)
    }
   
    throw new Error('ERR_SOME_ERROR')
  },

  getState() {
    return this._state
  },

  dispatch(action) {
    if (action.type === 'DELETE') {
      const index = this._findGoodById(action.parantsId, { isIndex: true })
      this._state.goods.splice(index, 1)
      rerenderEntireTree(store)
    }
    if (action.type === 'CHECK') {
      console.log('[]', this)

      const elem = this._findGoodById(action.parantsId, { isElement: true })
      elem.isChecked = !elem.isChecked
  
    rerenderEntireTree(store)
    }
    if (action.type === 'UPDATE') {
      const elem = this._findGoodById(action.parantsId, { isElement: true })
      elem.inputText = action.newInput
    
      rerenderEntireTree(store)
    }
    if (action.type === 'SHOW-BODY') {
      const elem = this._findGoodById(action.parantsId, { isElement: true })
  
      if (action.btn === 'tick') {
        elem.wasClickedEdit = true
        elem.text = elem.inputText
      }
      if (action.btn === 'edit') {
        elem.wasClickedEdit = false
        elem.inputText = elem.text
      }
      if (!action.btn) {
        throw new Error('ERR_SOME_ERROR')
      }
      rerenderEntireTree(store)
    }
    if (!action.type) {
      throw new Error('ERR_ACTION_TYPE_IS_NOT_DEFINED')
    }
  }
}

// window.store = store