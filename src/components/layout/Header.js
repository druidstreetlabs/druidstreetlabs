import React from 'react';
import './header.css';

export default function Header() {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <a href="/" aria-label="Druid Street Labs' homepage">
              <h1>Druid Street Labs</h1>
            </a>
          </li>
          <li>
            <a href="/experiments" aria-label="Druid Street Labs' experiments">
              Experiments
            </a>
          </li>
          <li>
            <a href="/about" aria-label="Druid Street Labs' about page">
              About
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
