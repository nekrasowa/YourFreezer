import { combineReducers } from 'redux'
// import { copyListReducer, deleteElementReducer } from './reducers/goodsListBoxReducers'
import { createGoodReducer } from './reducers/goodsListBoxReducers'
import { loaderReducer } from './reducers/loaderReducers'
// import { initDataReducer } from './reducers/initDataReducers'
 
const rootReducer = combineReducers({
  createGood: createGoodReducer,
  loader: loaderReducer,
  // initialData: initDataReducer,
  // copyList: copyListReducer,

  // deleteElement: deleteElementReducer,
});

export default rootReducer
