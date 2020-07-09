import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <nav>
          <span>OMDb App</span>
          <ul className="navLinks">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
