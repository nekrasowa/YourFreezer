import { combineReducers } from 'redux'
import { copyListReducer } from './reducers/goodsListBoxReducers'
 
const rootReducer = combineReducers({
  copyList: copyListReducer,
});

export default rootReducer
