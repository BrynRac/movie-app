import React from 'react';
import { searchMovie } from '../actions/searchActions.js';
import { connect } from 'react-redux';

function Search({searchMovie}) {
  const changeHandler = (e) => {
    const value = e.target.value;
    searchMovie(value);
  };
  return (
    <div className="search-form-container">
      <form className="search-form">
        <input
          onChange={(e) => changeHandler(e)}
          type="text"
          placeholder="Search for a movie"
        />
        <button>Search</button>
      </form>
     
    </div>
  );
}

const mapStateToProps = (state) => ({
  text: state.movies.text
});
export default connect(mapStateToProps, {searchMovie})(Search);
