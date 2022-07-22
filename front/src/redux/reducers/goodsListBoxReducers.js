import {
  CREATE_GOOD,
  LOADING_GOODS,
  DELETE_ONE,
  CHECKED,
  EDIT_GOOD,
  KEEP_GOOD
} from '../types'

const initialState = {
  goods: [
    {
      info: {
        textGood: 'apple',
        numberGood: 5,
        unitGood: 'kg',
        id: 'lkjhe78'
      },
      state: {
        isChecked: true,
        fieldShow: 'ReadBlock'
      }
    },
    // {
    //   info: {
    //     textGood: 'meat',
    //     numberGood: 4,
    //     unitGood: 'kg',
    //     id: 'lr4hgi78',
    //   },
    //   state: {
    //     isChecked: true,
    //     fieldShow: 'ReadBlock'

    //   }
    // },
    // {
    //   info: {
    //     textGood: 'bread',
    //     numberGood: 1,
    //     unitGood: 'pcs',
    //     id: 'lk67uh8',
    //   },
    //   state: {
    //     isChecked: false,
    //     fieldShow: 'ReadBlock'

    //   }
    // },
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
          info: {
            textGood: action.data.info.textGood,
            numberGood: action.data.info.numberGood,
            unitGood: action.data.info.unitGood,
            id: action.data.info.id
          },
          state: {
            isChecked: false,
            fieldShow: 'ReadBlock'
          }
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
        .findIndex(good => good.info.id === action.id)

      const goodsWithoutDeletedEl = [...state.goods]
      goodsWithoutDeletedEl.splice(deletedGoodIndex, 1)
      return {
        ...state,
        goods: goodsWithoutDeletedEl
      }
    case CHECKED:
      const chackedGood = state.goods
        .find(good => good.info.id === action.id)
      const chackedGoodIndex = state.goods
        .findIndex(good => good.info.id === action.id)

      const copyChackedGood = { ...chackedGood }

      const copyChackedGoodState = { ...copyChackedGood.state }

      copyChackedGoodState.isChecked 
      ? copyChackedGoodState.isChecked = false
      : copyChackedGoodState.isChecked = true
      copyChackedGood.state = copyChackedGoodState
      
      const goodsWithCheckedEl = [...state.goods]
      goodsWithCheckedEl.splice(chackedGoodIndex, 1, copyChackedGood)
      
      return {
        ...state,
        goods: goodsWithCheckedEl
      }
    case EDIT_GOOD:
      const showModify = 'ModifyBlock'

      return {
        ...state,
        fieldShow: showModify
      }
    case KEEP_GOOD:
      const showGood = 'ReadBlock'

      return {
        ...state,
        fieldShow: showGood
      }
    default:
      return state
  }
}
