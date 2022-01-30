import { makeAutoObservable } from "mobx";
import booksData from "../booksData";
import AddBookModal from "../modals/AddBookModal";

class BooksStore {
  books = booksData;
  constructor() {
    makeAutoObservable(this);
  }

  handleAddBook = (book) => {
    book.id = this.books[this.books.length - 1].id + 1;
    book.slug = book.title
      .replace(/\s+/g, "-") // collapse whitespace and replace by -
      .replace(/-+/g, "-")
      .toLowerCase(); // collapse dashes
    book.available = true;
    book.borrowedBy = [];
    // this.bookTitle = book.title;
    this.books.push(book);
    console.log(book);
  };

  // .replace(/[^a-z0-9 -]/g, "") // remove invalid chars

  // createSlug = (bookTitle) => {
  //   book.slug = this.bookTitle
  //     .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
  //     .replace(/\s+/g, "-") // collapse whitespace and replace by -
  //     .replace(/-+/g, "-"); // collapse dashes
  // };
}
const booksStore = new BooksStore();
export default booksStore;
