import React from 'react';
import MovieList from './MovieList';
import Search from './Search';

function Home() {
  return (
    <div className="Home">
      <Search />
      <MovieList />
    </div>
  );
}

export default Home;
