import React from "react";
import BooksList from "./BooksList";

const Books = () => {
  return (
    <div>
      <div className="header-container">
        <div className="header">
          <div className="header-title-container">
            <h2 className="header-title">A & A's Library</h2>
          </div>
          <div className="header header-shadow">
            <img
              className="header-image"
              src="https://static01.nyt.com/images/2022/01/16/fashion/VIRAL-LIBRARY/VIRAL-LIBRARY-superJumbo.jpg?quality=75&auto=webp"
            />
          </div>
        </div>
      </div>
      <body className="body">
        <BooksList />
        <footer className="footer">
          <p>
            Copyright 2022 - All Rights Reserved to Aisha Al Sharhan & Amal Al
            Mutairi
          </p>
        </footer>
      </body>
    </div>
  );
};

export default Books;
