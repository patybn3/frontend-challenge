import React from 'react';
import { validateForm, submitForm } from './helperFunctions';
import logo from './assets/techstars-logo-white.svg';
import { Link } from 'react-router-dom'
import Navigation from './Navbar.js';
import './App.css';

function App() {
  return (
    <div className="App">
    <Navigation />
    <a href="https://www.techstars.com/" target='_blank' rel='noopener noreferrer'>
      <header className="App-header">
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
        <img src={logo} className="App-logo" alt="logo" />
        <p className="visit">
        Visit Our Website
        </p>
      </header>
      </a>
      <div className="horizontal-line">
      </div>
    </div>
  );
}

export default App;
