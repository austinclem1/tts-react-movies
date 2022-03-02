import React, { Component } from "react";
import { MovieData } from "../dataClasses";

class Movie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description, year, genre } = this.props.data;
    return (
      <div className=" my-3 col-md-6 col-xl-4">
        <div className="card h-100 bg-light">
          <div className="card-body">
            <h5 className="card-title">{`${title} (${year})`}</h5>
            <hr />
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
