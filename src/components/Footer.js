import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p>
        Developed by <span style={{ color: 'white' }}>Bryan Race</span> -{' '}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
