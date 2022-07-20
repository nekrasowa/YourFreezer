import { combineReducers } from 'redux'
// import { copyListReducer, deleteElementReducer } from './reducers/goodsListBoxReducers'
import { createGoodReducer } from './reducers/goodsListBoxReducers'
 
const rootReducer = combineReducers({
  createGood: createGoodReducer,

  // copyList: copyListReducer,

  // deleteElement: deleteElementReducer,
});

export default rootReducer
