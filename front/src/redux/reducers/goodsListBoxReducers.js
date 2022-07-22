import { CREATE_GOOD, LOADING_GOODS, DELETE_ONE, CHECKED } from '../types'

const initialState = {
  goods: [
    {
      textGood: 'apple',
      numberGood: 5,
      unitGood: 'kg',
      id: 'lkjhe78',
      isChacked: true
    },
    {
      textGood: 'meat',
      numberGood: 4,
      unitGood: 'kg',
      id: 'lr4hgi78',
      isChacked: false
    },
    {
      textGood: 'bread',
      numberGood: 1,
      unitGood: 'pcs',
      id: 'lk67uh8',
      isChacked: false
    },
  ],
}

export const createGoodReducer = (state = initialState, action) => {
  // console.log('[action]:', action)

  switch (action.type) {
    case CREATE_GOOD:
      console.log('[action.data]:', action.data)
      return {
        ...state,
        goods: [...state.goods, {
          textGood: action.data.textGood,
          numberGood: action.data.numberGood,
          unitGood: action.data.unitGood,
          id: action.data.id,
          isChacked: false
        }]
      }

    case LOADING_GOODS:
      console.log('[action.data]:', action)

      return {
        ...state,
        goods: [...state.goods]
      }
    case DELETE_ONE:
      const deletedGoodIndex = state.goods
        .findIndex(good => good.id === action.id)

      const goodsWithoutDeletedEl = [...state.goods]
      goodsWithoutDeletedEl.splice(deletedGoodIndex, 1)
      return {
        ...state,
        goods: goodsWithoutDeletedEl
      }
    case CHECKED:
      const chackedGood = state.goods
        .find(good => good.id === action.id)
      const chackedGoodIndex = state.goods
        .findIndex(good => good.id === action.id)
          
        const copyChackedGood = {...chackedGood}
      copyChackedGood.isChacked = !copyChackedGood.isChacked
      
      const goodsWithCheckedEl = [...state.goods]
      goodsWithCheckedEl.splice(chackedGoodIndex, 1, copyChackedGood)

      console.log(goodsWithCheckedEl)
      return {
        ...state,
        goods: goodsWithCheckedEl
      }

    default:
      return state
  }
}

