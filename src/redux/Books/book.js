//Create action constant/actionType
const ADD_BOOK = "ADD_BOOK";
const REMOVE_BOOK = 'REMOVE_BOOK';

//Create Action Creator
const addBook = ({ isbn, title, author }) => {
    return {
        type: ADD_BOOK,
        book: { isbn, title, author, }
    };
};
const removeBook = (id) => {
    return {
        type: REMOVE_BOOK,
        book: isbn
    };
};

const initialState = [
    {isbn: 1234, title:"Learn Python", author:"John Matt"},
    {isbn: 1453, title:"Learn Java", author:"John Doe"}
]

const addBookReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return { ...state, 
                isbn: book.isbn, 
                title: book.title, 
                author: book.author };
        case REMOVE_BOOK:
            return state.filter((isbn) => (isbn !== book.isbn));
        default:
            return state;   
    }
}

export default addBookReducer;