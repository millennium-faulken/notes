import React, { Component } from "react";
import { getNotes } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Notes.css";

class NotesList extends Component {
  state = {
    note: "",
    content: "",
    name: "",
  };

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="mainNote">
        <div className="listing">
          {this.props.notes.map((note) => (
            <div className="singleNote" key={note._id}>
              <Link to={`/note/${note._id}`} className="noteList">
                <div className="noteTitle">{note.title}</div>
                <hr></hr>
                <div className="noteContent">{note.content}</div>
                {note.name ? (
                  <div className="noteAuthor">- {note.name}</div>
                ) : (
                  <div className="anon">- Anonymous</div>
                )}
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

export default connect(mapStateToProps, { getNotes })(NotesList);
