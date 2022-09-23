import { ADD_NEW_BOOK, REMOVE_BOOK, GET_BOOKS_API } from '../types';
import ApiServices from '../../services/Api.services';

const defualtBooks = [];

export const fetchBookApi = (books) => {
  const APIBooks = Object.entries(books).map(([key, value]) => ({ ...value[0], id: key }));
  return {
    type: GET_BOOKS_API,
    payload: APIBooks,
  };
};

export const bookFromAPI = () => async (dispatch) => {
  const response = await ApiServices.getBooks();
  dispatch(fetchBookApi(response));
};

export const createBook = (newBook) => ({
  type: ADD_NEW_BOOK,
  payload: newBook,
});

export const createBooks = (newBook) => async (dispatch) => {
  await ApiServices.addBook(newBook);
  dispatch(createBook({ ...newBook, id: newBook.item_id }));
};

export const deleteBook = (bookId) => ({
  type: REMOVE_BOOK,
  payload: bookId,
});

export const deleteBooks = (id) => async (dispatch) => {
  await ApiServices.deleteBook(id);
  dispatch(deleteBook(id));
};

export default function reducerBook(initialState = defualtBooks, action) {
  switch (action.type) {
    case ADD_NEW_BOOK:
      return [...initialState, action.payload];
    case REMOVE_BOOK:
      return [...initialState.filter((book) => (book.id !== action.payload))];
    case GET_BOOKS_API:
      return [...action.payload];
    default:
      return initialState;
  }
}
