import React, { Component } from "react";
import { Route } from "react-router-dom";
import NotesList from "./NotesList";
import CreateNote from "./CreateNote";
import NoteView from "./NoteView";
import "./Notes.css"
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={NotesList} />
        <Route path="/create" component={CreateNote} />
        <Route path="/note/:id" component={NoteView} />
      </div>
    );
  }
}

export default App;
