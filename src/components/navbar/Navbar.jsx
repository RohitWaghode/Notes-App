import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <h1>Notes </h1>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/login" className="navbar-link">
          Login
        </Link>
        <Link to="/signup" className="navbar-link">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
