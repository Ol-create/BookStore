import { combineReducers, configureStore } from '@reduxjs/toolkit';

import addBookReducer from './Books/book';

const reducer = combineReducers({
  addBook: addBookReducer,
});

const store = configureStore({ reducer });

export default store;
