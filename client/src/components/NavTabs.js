import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/books"
          className={window.location.pathname === "/books" ? "nav-link active" : "nav-link"}
        >
          Books
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/blog"
          className={window.location.pathname === "/blog" ? "nav-link active" : "nav-link"}
        >
          Blog
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact/learn"
          className={window.location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
        >
          Learn
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/omdbcontainer"
          className={window.location.pathname === "/omdbcontainer" ? "nav-link active" : "nav-link"}
        >
          OMDB
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/googlecontainer"
          className={window.location.pathname === "/googlecontainer" ? "nav-link active" : "nav-link"}
        >
          Book Search
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
