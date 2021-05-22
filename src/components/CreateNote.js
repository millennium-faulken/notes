import React, { Component } from "react";
import { createNote } from "../actions";
import { connect } from "react-redux";
import "./Notes.css";

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
      setTimeout(() => {
        this.setState({ badWord: false });
      }, 3000);
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
      <div className="createNoteContainer">
        <h3 className="headerNotes">Write a message:</h3>
        <div className="inputFields">
          <input
            type="text"
            className="title"
            name="name"
            value={this.state.name}
            placeholder="Name (optional)"
            onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            type="text"
            className="title"
            name="title"
            value={this.state.title}
            placeholder="Message title"
            onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
          />
          <textarea
            type="text"
            className="content"
            maxLength="300"
            name="content"
            value={this.state.content}
            placeholder="Message"
            onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
          ></textarea>

          <button
            className="saveButton"
            disabled={!this.state.content + !this.state.title}
            onClick={() => {
              this.badWordCheck();
              this.setState({ title: "", content: "", name: "" });
            }}
          >
            Submit
          </button>
          {this.state.badWord && (
            <div className="detectedBadWord">
              Bad word detected! Your message was not submitted.
            </div>
          )}
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
