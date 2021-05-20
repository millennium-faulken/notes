import React, { Component } from "react";
import { getNotes, deleteNote } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import "./Notes.css";

class NotesList extends Component {
  state = {
    title: "",
    content: "",
  };

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="mainNote">
        <NavBar />
        <div className="listing">
          {this.props.notes.map((note) => (
            <div className="singleNote">
              <Link
                to={`/note/${note._id}`}
                key={note._id}
                className="noteList"
              >
                <div className="noteTitle">{note.title}</div>
                <div className="noteContent">{note.content}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    fetchingNotes: state.fetchingNotes,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getNotes, deleteNote })(NotesList);
