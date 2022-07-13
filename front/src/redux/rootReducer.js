import { combineReducers } from 'redux'
// import { copyListReducer, deleteElementReducer } from './reducers/goodsListBoxReducers'
import { addGoodReducer } from './reducers/goodsListBoxReducers'
 
const rootReducer = combineReducers({
  addGood: addGoodReducer,

  // copyList: copyListReducer,

  // deleteElement: deleteElementReducer,
});

export default rootReducer
