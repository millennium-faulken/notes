import React, { Component } from "react";
import "./Notes.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBarContainer">
        <h1 className="header">Messages to the no one...</h1>
        <div className="links">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3 className="notesLink">Messages</h3>
          </Link>
          <Link to="/create" style={{ textDecoration: "none" }}>
            <h3 className="createLink">Write a Message</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
