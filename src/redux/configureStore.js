import { combineReducers, createStore } from 'redux';

import addBookReducer from './Books/book';

const rootReducer = combineReducers({
  addBook: addBookReducer,
});

const store = createStore(rootReducer);

export default store;
