import { rerenderEntireTree } from './render'

export const store = {
  _state: {
    goods: [
      { id: 1, key: 1, text: 'bananas', number: 2, unit: 'kilo', isChecked: false, wasClickedEdit: true, change: {inputText: '',  inputNumber: '', inputUnit: ''}},
      { id: 2, key: 2, text: 'apple', number: 5, unit: 'kilo', isChecked: false, wasClickedEdit: true, change: {inputText: '',  inputNumber: '', inputUnit: ''} },
      { id: 3, key: 3, text: 'meat', number: 2, unit: 'pcs', isChecked: false, wasClickedEdit: true, change: {inputText: '',  inputNumber: '', inputUnit: ''} },
      { id: 4, key: 4, text: 'pork', number: 6, unit: 'kilo', isChecked: true, wasClickedEdit: true, change: {inputText: '',  inputNumber: '', inputUnit: ''} },
    ],
    newGood: { text: '', number: '', unit: 'kilo' },
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

  generateId() {
    const array = this.getState()
    return array.goods.length + 1
  },

  dispatch(action) {
    if (action.type === 'DELETE') {
      const index = this._findGoodById(action.parantsId, { isIndex: true })
      this._state.goods.splice(index, 1)
      rerenderEntireTree(store)
    }
    if (action.type === 'CHECK') {
      const elem = this._findGoodById(action.parantsId, { isElement: true })
      elem.isChecked = !elem.isChecked

      rerenderEntireTree(store)
    }
    if (action.type === 'UPDATE-EDIT-INPUT') {
      if (action.subtype === 'TEXT') {
      const elem = this._findGoodById(action.parantsId, { isElement: true })
      elem.change.inputText = action.newInput
      }
      if (action.subtype === 'NUMBER') {
        const elem = this._findGoodById(action.parantsId, { isElement: true })
        elem.change.inputNumber = action.newNumber
      }
      if (action.subtype === 'UNIT') {
        const elem = this._findGoodById(action.parantsId, { isElement: true })
        elem.change.inputUnit = action.newUnit
      }
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
    if (action.type === 'UPDATE-ADD-INPUT') {
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

      rerenderEntireTree(store)
    }
    if (action.type === 'ADD') {
      const newGood = this.getNewGood()
      const id = this.generateId()
      const text = newGood.text
      const number = newGood.number
      const unit = newGood.unit

      const newElem = {
        id: id,
        key: id,
        text: text,
        number: number,
        unit: unit,
        isChecked: false,
        wasClickedEdit: true,
        change: { inputText: '',  
                  inputNumber: '', 
                  inputUnit: '' }
      }
      this._state.goods.push(newElem)
      this._state.newGood.text = ''
      this._state.newGood.number = ''
      this._state.newGood.unit = 'kilo'

      rerenderEntireTree(store)
    }

    if (!action.type) {
      throw new Error('ERR_ACTION_TYPE_IS_NOT_DEFINED')
    }
  }
}
