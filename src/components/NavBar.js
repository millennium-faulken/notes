import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBarContainer">
        <h1 className="header">Notes</h1>
        <div className="links">
          <Link to="/notes" style={{ textDecoration: "none" }}>
            <h3 className="notesLink">Notes</h3>
          </Link>
          <Link to="/create" style={{ textDecoration: "none" }}>
            <h3 className="createLink">Create</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
