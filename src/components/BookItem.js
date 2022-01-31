import React from "react";
// import { Link } from "react-router-dom";
import ShowBookDetailsModal from "../modals/ShowBookDetailsModal";
import BorrowBookModal from "../modals/BorrowBookModal";

const BookItem = ({ book }) => {
  return (
    <div className="book-item">
      <div>
        <p>
          <img className="book-image" src={book.image} />
        </p>
      </div>
      <div className="book-details">
        <p>
          <strong>Title: </strong>
          {book.title}
        </p>
        <p>
          <strong>Author: </strong>
          {book.author}
        </p>
        <p>
          <strong>Genre: </strong>
          {book.genre.join(", ")}
        </p>
      </div>
      <div className="buttons-container">
        <p className="buttons">
          <ShowBookDetailsModal selectedBook={book} />
        </p>
      </div>
    </div>
  );
};

export default BookItem;
