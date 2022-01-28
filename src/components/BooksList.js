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

  const books = booksStore.books.map((book) => <BookItem book={book} />);

  return (
    <>
      <div className="members-list">
        <div className="members-list-header">
          <div>
            <AddBookModal />
          </div>
          <div>
            <h3 className="list-title"> Books: </h3>
          </div>
          <section id="doctors" className="doctor-section pt-140 list-title">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xxl-5 col-xl-6 col-lg-7">
                  <div className="section-title text-center mb-30">
                    <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                      Title
                    </h1>
                    <div className="input-group rounded">
                      <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                        onChange={(e) => setQuery(e.target.value)}
                      />
                    </div>
                    <br />
                    Genre
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
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="list">{genre === "" ? books : selectGenre}</div>
    </>
  );
};

export default observer(BooksList);
