import React from 'react';
import logo from './assets/techstars-logo-white.svg';
// Style for this file can be found on App.css
import './App.scss';

function Header() {
  return (
    <a href="https://www.techstars.com/" target='_blank' rel='noopener noreferrer'>
      <header className="app-header">
      <div className="stripes-1">
      </div>
      <div className="stripes-2">
      </div>
      <div className="stripes-3">
      </div>
      <div className="stripes-4">
      </div>
      <div className="stripes-5">
      </div>
      <div className="stripes-6">
      </div>
      <div className="stripes-7">
      </div>
      <div className="stripes-8">
      </div>
        <img src={logo} className="app-logo" alt="logo" />
        <p className="visit">
        Click to Visit Our Page
        </p>
      </header>
      <div className="horizontal-line">
      </div>
      </a>
  );
}

export default Header;
