import React, { Component } from "react";
import { createNote } from "../actions";
import { connect } from "react-redux";
import "./Notes.css";
import NavBar from "./NavBar";

class CreateNote extends Component {
  state = {
    title: "",
    content: "",
    name: "",
    badWord: false,
  };

  badWordCheck(content) {
    let badWords = [
      "ass",
      "shit",
      "asshole",
      "bastard",
      "bitch",
      "fuck",
      "fag",
      "faggot",
      "bullshit",
      "Ass",
      "Shit",
      "Asshole",
      "Bastard",
      "Bitch",
      "Fuck",
      "Fag",
      "Faggot",
      "Bullshit",
    ];
    const badWord = badWords.filter(
      (bad) =>
        this.state.content.includes(bad) ||
        this.state.title.includes(bad) ||
        this.state.name.includes(bad)
    );
    if (badWord.length) {
      this.setState({ badWord: true });
    } else {
      this.props.createNote({
        title: this.state.title,
        content: this.state.content,
        name: this.state.name,
      });
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="createNoteContainer">
          <h3 className="headerNotes">Create New Note:</h3>
          <div className="inputFields">
            <div className="inputTitle">
              <input
                type="text"
                className="title"
                name="name"
                value={this.state.name}
                placeholder="Name (optional)"
                onChange={(e) =>
                  this.setState({ [e.target.name]: e.target.value })
                }
              />
              <input
                type="text"
                className="title"
                name="title"
                value={this.state.title}
                placeholder="Note Title"
                onChange={(e) =>
                  this.setState({ [e.target.name]: e.target.value })
                }
              />

              <textarea
                type="text"
                className="content"
                maxLength="300"
                name="content"
                value={this.state.content}
                placeholder="Note Content"
                onChange={(e) =>
                  this.setState({ [e.target.name]: e.target.value })
                }
              ></textarea>
            </div>
          </div>
          <div>
            <button
              className="saveButton"
              onClick={() => {
                this.badWordCheck();
                this.setState({ title: "", content: "", name: "" });
              }}
            >
              Save
            </button>
            {this.state.badWord && (
              <div>Bad word detected, your message was not submitted!</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    creatingNote: state.creatingNote,
    error: state.error,
  };
};

export default connect(mapStateToProps, { createNote })(CreateNote);
