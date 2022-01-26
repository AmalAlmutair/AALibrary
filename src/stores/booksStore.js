import { makeAutoObservable } from "mobx";

import booksData from "../booksData";
class BooksStore {
  books = booksData;
  constructor() {
    makeAutoObservable(this);
  }
}
const booksStore = new BooksStore();
export default booksStore;
