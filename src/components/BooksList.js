import React from "react";
import booksStore from "../stores/booksStore";
import BookItem from "./BookItem";
// import AddBookModal from "../modals/AddBookModal";
import { observer } from "mobx-react";

const BooksList = () => {
  const booksList = booksStore.books.map((book) => <BookItem book={book} />);

  return (
    <>
      <div className="members-list">
        <div className="members-list-header">
          <div>{/* <AddBookModal /> */}</div>
          <div>
            <h3 className="list-title"> Books: </h3>
          </div>
        </div>
        <div className="list">{booksList}</div>
      </div>
    </>
  );
};

export default observer(BooksList);
