import React from 'react';
import Movie from './Movie';
import Loader from './Loader';
import { setLoading } from '../actions/searchActions';
import { connect } from 'react-redux';

function MovieList({ movies, loading }) {
  return (
    <div>
      {loading ? (
        <div style={{ marginTop: '100px' }}>
          <Loader />
        </div>
      ) : (
        <ul className="movieList">
          {movies
            ? movies.map((movie) => <Movie key={movie.imdbID} movie={movie} />)
            : null}
        </ul>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    loading: state.movies.loading,
  };
};

export default connect(mapStateToProps, { setLoading })(MovieList);
