import { combinReducers, createStore } from 'redux';

import addBookReducer from './Books/book';

const rootReducer = combinReducers({
    addBook: addBookReducer,
});

const store = createStore( rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

    export default store;