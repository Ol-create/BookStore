//import { combineReducers } from 'redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import addBookReducer from './Books/book';

const reducer = combineReducers({
  addBook: addBookReducer,
});

export const store = configureStore({ reducer });

