import React from 'react';
import Movie from './Movie';
import { connect } from 'react-redux';

function MovieList({ movies }) {
  return (
    <div>
      <ul className="movieList">
        {movies
          ? movies.map((movie) => <Movie key={movie.imdbID} movie={movie} />)
          : null}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
  };
};

export default connect(mapStateToProps)(MovieList);
