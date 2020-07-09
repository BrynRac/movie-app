import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { fetchMovie, setLoading } from '../actions/searchActions';

function MovieInfo({ movie, loading, match, fetchMovie, setLoading }) {
  useEffect(() => {
    fetchMovie(match.params.id);
    setLoading();
  }, [fetchMovie, match.params.id, setLoading]);

  const info = (
    <div className="MovieInfo">
      <div className="movie-img">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="info">
        <h2>{movie.Title}</h2>
        <ul>
          <li>
            <p>Type: {movie.Type}</p>
          </li>
          <li>
            <p>Released: {movie.Year}</p>
          </li>
          <li>
            <p>Genre: {movie.Country}</p>
          </li>
          <li>
            <p>Country: {movie.Genre}</p>
          </li>
          <li>
            <p>Language: {movie.Language}</p>
          </li>
          <li>
            <p>Metascore: {movie.Metascore}</p>
          </li>
          <li>
            <p>imdbRating: {movie.imdbRating}</p>
          </li>
        </ul>
        <div className="description">
          <p>{movie.Plot}</p>
        </div>
      </div>
      <Link to="/movie-app">
        <button>Back</button>
      </Link>
    </div>
  );
  return <div>{loading ? <Loader /> : info}</div>;
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  movie: state.movies.movie,
});

export default connect(mapStateToProps, { setLoading, fetchMovie })(MovieInfo);
