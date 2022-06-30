import { rerenderEntireTree } from './render'

export const store = {
  _state: {
    goods: [
      {id: 1, text: 'bananas', number: 2, unit: 'kilo', isChecked: false, wasClickedEdit: true, inputText: ''},
      {id: 2, text: 'apple', number: 5, unit: 'kilo', isChecked: false, wasClickedEdit: true, inputText: ''},
      {id: 3, text: 'meat', number: 2, unit: 'pcs', isChecked: false, wasClickedEdit: true, inputText: ''},
      {id: 4, text: 'pork', number: 6, unit: 'kilo', isChecked: true, wasClickedEdit: true, inputText: ''},
    ],
    newGood: {text: '', number: '', unit: 'kilo'},
    copyText: '',
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
  getNewGood() {
    return this._state.newGood
  },

  getList() {  
    const state = this.getState()
    const array = state.goods.map((g) => {
      return g.text
    })
    return array.join(',\n')
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
    if (action.type === 'DELETE-ALL') {
      const array = this.getState()
      array.goods.length = 0
      rerenderEntireTree(store)
    }
    if (action.type === 'COPY') {
      this._state.copyText = this.getList()
      rerenderEntireTree(store)
    }
    if (action.type === 'UPDATE-ADD_INPUT') {
      const elem = this.getNewGood()
      if (action.subtype === 'TEXT') {
        elem.text = action.newInput
      }
      if (action.subtype === 'NUMBER') {
        elem.number = action.newInput
      }
      if (action.subtype === 'UNIT') {
        elem.unit = action.newInput
      }
      
      console.log(this.getNewGood())
    
      rerenderEntireTree(store)
    }
    if (!action.type) {
      throw new Error('ERR_ACTION_TYPE_IS_NOT_DEFINED')
    }
  }
}

// window.store = store