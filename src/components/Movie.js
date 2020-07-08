import React from 'react';

export default function Movie({ movie }) {
  return (
    <li className="Movie">
      <div className="movie-img">
        <img src={movie.Poster} alt={movie.Title} />
      </div>

      <div className="movie-info">
        <p>{movie.Title}</p> <p>{movie.Year}</p>
      </div>
    </li>
  );
}
