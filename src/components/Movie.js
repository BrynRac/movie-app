import React from 'react';
import { Link } from 'react-router-dom';

function Movie({ movie }) {
  return (
    <li className="Movie">
      <div className="movie-img">
        <Link to={'/movie/' + movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} />
        </Link>
      </div>

      <div className="movie-info">
        <p>{movie.Title}</p>
      </div>
    </li>
  );
}

export default Movie;
