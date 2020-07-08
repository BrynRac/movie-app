import React from 'react';
import Movie from './Movie';

export default function MovieList() {
  return (
    <div>
      <ul className="movieList">
        <Movie />
      </ul>
    </div>
  );
}
