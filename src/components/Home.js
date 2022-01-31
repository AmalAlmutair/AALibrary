import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="header header-shadow">
        <img
          className="header-image"
          alt="header"
          src="https://static01.nyt.com/images/2022/01/16/fashion/VIRAL-LIBRARY/VIRAL-LIBRARY-superJumbo.jpg?quality=75&auto=webp"
        />
        <div className="home-container">
          <div className="home-container-shadow">
            <div className="library-welcome">
              <p>Welcome to</p>
              <p style={{ fontSize: "70px" }}>A&A's Library</p>
              <p>
                Become A <Link to="/members">Member</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
