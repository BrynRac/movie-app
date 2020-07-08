import React from 'react';
import { connect } from 'react-redux';
import MovieList from './MovieList';
import Search from './Search';
import Loader from './Loader';

function Home({ loading }) {
  return (
    <div className="Home">
      <h1>Search movies</h1>
      <Search />

      {loading ? (
        <div style={{ marginTop: '100px' }}>
          <Loader />
        </div>
      ) : (
        <MovieList />
      )}
    </div>
  );
}
const MapStatetoProps = (state) => {
  return {
    loading: state.movies.loading,
  };
};

export default connect(MapStatetoProps)(Home);
