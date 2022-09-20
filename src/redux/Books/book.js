//Create action constant/actionType
const ADD_BOOK = "ADD_BOOK";
const REMOVE_BOOK = 'REMOVE_BOOK';

//Create Action Creator
const addBook = (id) => {
    return {
        type: ADD_BOOK,
        id
    };
};
const removeBook = (id) => {
    return {
        type: REMOVE_BOOK,
        id
    };
};