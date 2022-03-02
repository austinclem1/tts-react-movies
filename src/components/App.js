import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import MovieCollections from "./MovieCollections";
import { MovieData } from "../dataClasses";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="m-5">
        <h1 className="display-2 d-flex justify-content-center">
          Movie Collections
        </h1>
        <MovieCollections collections={this.props.collections} />
      </div>
    );
  }
}

export default App;
