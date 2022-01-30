import React from "react";
// import { Link } from "react-router-dom";
import ShowBookDetailsModal from "../modals/ShowBookDetailsModal";
import BorrowBookModal from "../modals/BorrowBookModal";

const BookItem = ({ book }) => {
  return (
    <div className="member-item">
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
        {/* {book.genre.join(", ")} */}
        {book.genre}
      </p>
      <p>
        <strong>Availability: </strong>
        <ShowBookDetailsModal selectedBook={book} />
        <BorrowBookModal selectedBook={book} />
      </p>
    </div>
  );
};

export default BookItem;
