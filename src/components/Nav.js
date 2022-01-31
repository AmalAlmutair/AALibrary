import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav
      style={{ position: "sticky" }}
      className="navbar navbar-expand-lg text-uppercase fixed-top sticky-nav"
      id="mainNav"
    >
      <div className="container">
        <NavLink
          style={{ color: "white", fontWeight: "bold" }}
          className="navbar-brand"
          to="/"
        >
          Home
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink
                style={{ color: "white", fontWeight: "bold" }}
                className="nav-link py-3 px-0 px-lg-3 rounded"
                to="/members"
              >
                Members
              </NavLink>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink
                style={{ color: "white", fontWeight: "bold" }}
                className="nav-link py-3 px-0 px-lg-3 rounded"
                to="/books"
              >
                Books
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
