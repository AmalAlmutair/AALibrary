import React, { useState } from "react";
import booksStore from "../stores/booksStore";
import BookItem from "./BookItem";
import AddBookModal from "../modals/AddBookModal";
import { observer } from "mobx-react";

const BooksList = () => {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("");

  const selectGenre = booksStore.books
    .filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) &&
        book.genre.includes(genre)
    )
    .map((book) => <BookItem key={book.id} book={book} />);

  const books = booksStore.books
    .filter((book) => book.title.toLowerCase().includes(query.toLowerCase()))
    .map((book) => <BookItem key={book.id} book={book} />);

  return (
    <>
      <div className="members-list">
        <div className="members-list-header">
          <div className="sub-banner-container">
            <div className="list-title">
              <h1> Books: </h1>
            </div>
            <div className="book-query">
              <div>
                <h2>Title:</h2>
              </div>
              <div>
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div>
                <h2>Genre:</h2>
              </div>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setGenre(e.target.value)}
              >
                <option value="" selected>
                  All Genres
                </option>
                <option value="Self-Help">Self Help</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Thriller">Thriller</option>
                <option value="Suspense">Suspense</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Biography">Biography</option>
                <option value="Business">Business</option>
                <option value="Entrepreneurship">Entrepreneurship</option>
                <option value="Crime">Crime</option>
                <option value="Mystery">Mystery</option>
                <option value="Fiction">Fiction</option>
              </select>
            </div>
            <div>
              <AddBookModal />
            </div>
          </div>
        </div>
      </div>
      <div className="list">{genre === "" ? books : selectGenre}</div>
    </>
  );
};

export default observer(BooksList);
