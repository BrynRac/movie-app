import React from 'react';
import { connect } from 'react-redux';

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
const MapStatetoProps = () => {
  return {};
};

export default connect(MapStatetoProps)(Home);
