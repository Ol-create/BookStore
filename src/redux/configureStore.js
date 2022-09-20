import { combinReducers } from 'redux';

import addBookReducer from './Books/book';

const rootReducer = combinReducers({
    addBook: addBookReducer,
})