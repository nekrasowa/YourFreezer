import { combineReducers } from 'redux'
// import { copyListReducer, deleteElementReducer } from './reducers/goodsListBoxReducers'
import { createGoodReducer } from './reducers/goodsListBoxReducers'
import { loaderReducer } from './reducers/loaderReducers'
import { errorReducer } from './reducers/errorReducers'
import { enterReducer } from './reducers/enterReducers';
import { contentReducer } from './reducers/contentReducers';
// import { initDataReducer } from './reducers/initDataReducers'
 
const rootReducer = combineReducers({
  createGood: createGoodReducer,
  loader: loaderReducer,
  isError: errorReducer,
  enter: enterReducer,
  content: contentReducer,
  // initialData: initDataReducer,
  // copyList: copyListReducer,

  // deleteElement: deleteElementReducer,
});

export default rootReducer
