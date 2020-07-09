import React from 'react';
import { FaGithub } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer>
      <div>
        <p style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ color: 'white', marginLeft: '1rem' }}>Bryan Race</span>{' '}
          <a
            style={{ marginLeft: '1rem' }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/BrynRac"
          >
            <FaGithub />
          </a>
        </p>
      </div>
    </footer>
  );
}
