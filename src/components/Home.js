import React from 'react';
import { connect } from 'react-redux';
import MovieList from './MovieList';
import Search from './Search';

function Home() {
  return (
    <div className="Home">
      <h1>Search movies</h1>
      <Search />
      <MovieList />
    </div>
  );
}
const MapStatetoProps = () => {
  return {};
};

export default connect(MapStatetoProps)(Home);
