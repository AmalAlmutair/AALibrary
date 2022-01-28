import "./App.css";
import "./assets/css/bootstrap-5.0.0-beta2.min.css";
import { Route, Routes } from "react-router-dom";
import Members from "../src/components/Members";
import Books from "../src/components/Books";
import Nav from "./components/Nav";
import Home from "./components/Home";
import booksStore from "./stores/booksStore";
// import MemberProfile from "./components/MemberProfile";

function App() {
  const books = booksStore.books;
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/books" element={<Books books={books} />} />
      </Routes>
    </div>
  );
}

export default App;
