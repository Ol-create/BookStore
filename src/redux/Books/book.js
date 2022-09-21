// Create action constant/actionType
const ADD_BOOK = 'bookLib/books/ADD_BOOK';
const REMOVE_BOOK = 'bookLib/books/REMOVE_BOOK';

// Create Action Creator
export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (isbn) => ({
  type: REMOVE_BOOK,
  isbn,
});

const initialState = [
  {
        isbn: 1234,
        title: 'Learn Python',
        author: 'John Matt',
    },
  {
        isbn: 1453,
        title: 'Learn Java',
        author: 'John Doe',
    },
];

const addBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        book: action.book,
      };
    case REMOVE_BOOK:
      return state.filter((isbn) => (isbn !== action.book.isbn));
    default:
      return state;
  }
};

export default addBookReducer;
