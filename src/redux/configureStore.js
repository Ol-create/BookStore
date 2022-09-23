import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducerCategories from './Categories/categories';
import reducerBook from './books/books';

const reducer = combineReducers({ Books: reducerBook, Categories: reducerCategories });

const store = configureStore({ reducer, middleware: [thunk] });

export default store;
