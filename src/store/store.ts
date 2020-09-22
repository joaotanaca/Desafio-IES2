import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import themeReducer from './themeReducer';
import cartReducer from './cartReducer';

export const store = createStore(
  combineReducers({themeReducer, cartReducer}),
  applyMiddleware(thunk),
);
