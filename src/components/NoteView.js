import React, { Component } from "react";
import { getNote } from "../actions";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import "./Notes.css";

class NoteView extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getNote(id);
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="noteView">
          <div className="oneTitle">{this.props.note.title}</div>
          <hr></hr>
          <div className="oneContent">{this.props.note.content}</div>
          {this.props.note.name ? (
            <div className="oneName">- {this.props.note.name}</div>
          ) : (
            <div className="anon">- Anonymous</div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    note: state.note,
    fetchNote: state.fetchNote,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getNote })(NoteView);
