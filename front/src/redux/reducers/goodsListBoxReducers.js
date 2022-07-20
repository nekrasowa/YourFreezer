import { CREATE_GOOD } from '../types'

const initialState = {
  goods: [
    {
      textGood: 'applle',
      numberGood: 5,
      unitGood: 'kg',
      id: 'lkjhe78',
      key: 'lkjhe78'
    },
    {
      textGood: 'meat',
      numberGood: 4,
      unitGood: 'kg',
      id: 'lr4hgi78',
      key: 'lr4hgi78'
    },
    {
      textGood: 'bread',
      numberGood: 1,
      unitGood: 'pcs',
      id: 'lk67uh8',
      key: 'lk67uh8'
    },
  ],
}

export const createGoodReducer = (state = initialState, action) => {
  console.log('[action]:', action)

  switch(action.type) {
    case CREATE_GOOD:
      console.log('[action.data]:', action.data)

      return {
        ...state,
        goods: [...state.goods, {
          textGood: action.data.textGood,
          numberGood: action.data.numberGood,
          unitGood: action.data.unitGood,
          id: action.data.id,
          key: action.data.id
        }]
      }
    default:
      return state
  }
}

