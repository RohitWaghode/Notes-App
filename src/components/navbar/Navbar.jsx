import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="header-link">
        <h1 className="header">Notes</h1>
      </Link>
      <div className="navbar-logo"></div>
      <div className="navbar-links">
        <Link to="/addNotes" className="navbar-link">
          Add Notes
        </Link>
        <Link to="/allnotes" className="navbar-link">
          All Notes
        </Link>
        <Link to="/" className="navbar-link">
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
