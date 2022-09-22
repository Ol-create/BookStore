import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/Books/book';

const Book = () => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
      e.preventDefault();
      if(!e.target.element[2]) {
        dispatch(addBook(e.target.element[1].value, 'Anonymous'))
      } else {
        dispatch(add(e.target.element[1].value, e.target.element[2].value))
      }

  }
  return(
  <form className="addBook" onSubmit={submitHandler}>
    <h2>ADD NEW BOOK</h2>
    <input type="number" name="isbn" placeholder="ISBN" />
    <input type="text" name="title" placeholder="Book Title" />
    <input type="text" name="author" placeholder="Book Author" />
    <button className="addBtn" type="submit">Add Books</button>
  </form>
  )
};

export default Book;