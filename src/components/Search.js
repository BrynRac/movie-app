import React from 'react';
import { searchMovie, fetchMovies } from '../actions/searchActions.js';
import { connect } from 'react-redux';

function Search({ searchMovie, fetchMovies, text }) {
  const inputHandler = (e) => {
    const value = e.target.value;
    searchMovie(value);
  };

  const getMovies = (e) => {
    e.preventDefault();
    if (text === '') {
      alert('Please enter a search term!');
    } else {
      fetchMovies(text);
    }
  };

  return (
    <div className="search-form-container">
      <form className="search-form" onSubmit={getMovies}>
        <input
          onChange={(e) => inputHandler(e)}
          type="text"
          placeholder="Search for a movie"
        />
        <button>Search</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  text: state.movies.text,
});

export default connect(mapStateToProps, { searchMovie, fetchMovies })(Search);
