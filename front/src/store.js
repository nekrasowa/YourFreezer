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
      rerenderEntireTree(this._state, this._getMethod)
    }
    if (action.type === 'CHECK') {
      const elem = this._findGoodById(action.parantsId, { isElement: true })
      elem.isChecked = !elem.isChecked
  
    rerenderEntireTree(this._state, this._getMethod)
    }
    if (action.type === 'UPDATE') {
      const elem = this._findGoodById(action.parantsId, { isElement: true })
      elem.inputText = action.newInput
    
      rerenderEntireTree(this._state, this._getMethod)
    }
    if (action.type === 'SHOW-BODY') {
      const elem = this._findGoodById(action.parantsId, { isElement: true })
  
      if (action.btn === 'tick') {
        elem.wasClickedEdit = true
      }
      if (action.btn === 'edit') {
        elem.wasClickedEdit = false
      }
      if (!action.btn) {
        throw new Error('ERR_SOME_ERROR')
      }
      rerenderEntireTree(this._state, this._getMethod)
    }
    if (!action.type) {
      throw new Error('ERR_ACTION_TYPE_IS_NOT_DEFINED')
    }
  }
}