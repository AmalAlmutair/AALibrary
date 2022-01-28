import React from "react";
import MembersList from "./MembersList";

const Members = () => {
  return (
    <div>
      <div className="header-container">
        <div className="header">
          <div className="header-title-container">
            <h className="header-title">A & A's Library</h>
          </div>
          <div className="header header-shadow">
            <img
              alt="header"
              className="header-image"
              src="https://static01.nyt.com/images/2022/01/16/fashion/VIRAL-LIBRARY/VIRAL-LIBRARY-superJumbo.jpg?quality=75&auto=webp"
            />
          </div>
        </div>
      </div>
      <body className="body">
        <MembersList />
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

export default Members;
