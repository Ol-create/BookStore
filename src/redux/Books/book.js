//Create action constant/actionType
const ADD_BOOK = "ADD_BOOK";
const REMOVE_BOOK = 'REMOVE_BOOK';

//Create Action Creator
const addBook = (title) => {
    return {
        type: ADD_BOOK,
        book: { title }
    };
};
const removeBook = (id) => {
    return {
        type: REMOVE_BOOK,
        book: id
    };
};

const initialState = [
    {isbn: 1234, title:"Learn Python", author:"John Matt"},
    {isbn: 1453, title:"Learn Java", author:"John Doe"}
]

const addBookReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return action.id;
        case REMOVE_BOOK:
            return state.filter((book, index) => (index !== action.book));
        default:
            return state;   
    }
}

export default addBookReducer;