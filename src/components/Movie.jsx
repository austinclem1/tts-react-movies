import React, { Component } from "react";
import { MovieData } from "../dataClasses";

class Movie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description, year, genre } = this.props.data;
    return (
        <div className='col-12 col-sm-6 col-lg-4'>
      <div className='card bg-light'>
        <div className='card-body'>
          <h5 className='card-title'>{`${title} (${year})`}</h5>
          <hr />
          <p className='card-text'>{description}</p>
        </div>
      </div>
        </div>
      // <tr>
      //   <td>{title}</td>
      //   <td>{description}</td>
      //   <td>{year}</td>
      //   <td>{genre}</td>
      // </tr>
    );
  }
}

export default Movie;
