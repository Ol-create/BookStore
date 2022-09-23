import { v4 as uuidv4 } from 'uuid';

// Define action constant
const ADD_NEW_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const defualtBooks = [];

export const getBooksAPI = (books) => {
  const APIBooks = Object.entries(books).map(([key, value]) => ({ ...value[0], id: key }));
  return {
    type: GET_BOOKS_API,
    payload: APIBooks,
  };
}

export const bookFromAPI = () => async (dispatch) => {
  const response = await ApiServices.getBooks();
  dispatch(getBooksAPI(response));
};

export const createBook = (newBook) => ({
  type: ADD_NEW_BOOK,
  payload: newBook,
});

export const addNewBooks = (newBook) => async (dispatch) => {
  await ApiServices.addBook(newBook);
  dispatch(addNewBook({ ...newBook, id: newBook.item_id }));
};

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  payload: bookId,
});

export const removeBooks = (id) => async (dispatch) => {
  await ApiServices.removeBook(id);
  dispatch(removeBook(id));
};

const bookReducer = (initialState = defualtBooks, action) => {
  switch (action.type) {
    case ADD_NEW_BOOK:
      return [...initialState, action.payload];
    case REMOVE_BOOK:
      return [...initialState.filter((book) => (book.id !== action.payload))];
    default:
      return initialState;
  }
};

export default bookReducer;
