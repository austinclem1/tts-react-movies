import React, { Component } from "react";
import Movie from "./Movie";
import { MovieData } from "../dataClasses";
import PropTypes from "prop-types";

class Collection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const movies = this.props.movies.map((item) => (
      <Movie key={item.title + item.year} data={item} />
    ));

    return (
        <div className='row'>
          <h3>{this.props.title}</h3>
          {movies}
        </div>
      // <div className="col-4">
      //   <table className="table table-info">
      //     <thead>
      //       <tr>
      //         <th scope="col">Title</th>
      //         <th scope="col">Description</th>
      //         <th scope="col">Year</th>
      //         <th scope="col">Genre</th>
      //       </tr>
      //     </thead>
      //     <tbody>{movies}</tbody>
      //   </table>
      // </div>
    );
  }
}

Collection.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.arrayOf(PropTypes.instanceOf(MovieData)),
};

class MovieCollections extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        this.props.collections.map((collection, index) =>
          <Collection key={index} title={collection.title} movies={collection.movies} />
        )
    );
  }
}

MovieCollections.propTypes = {
  collections: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.instanceOf(MovieData))
  ),
};

export default MovieCollections;
