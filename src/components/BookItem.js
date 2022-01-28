import React from "react";
import { Link } from "react-router-dom";
// import ShowBookDetails from "../modals/ShowBookDetails";

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
        {book.genre}
      </p>
      {/* <ShowBookDetails selectedBook={book} /> */}
      <p>
        <strong>Availability: </strong>
      </p>
      <p>
        <strong>Genre: </strong>
        {book.genre.join(", ")}
      </p>
    </div>
  );
};

export default BookItem;
