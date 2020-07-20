import React from 'react';
import { validateForm, submitForm } from './helperFunctions';
// import { Link } from 'react-router-dom'
// calls the file Navbar.js that contains the code for the navbar
import Navigation from './Navbar.js';
// calls the file Header.js which contains the code for the interactive Header
// under the Navbar
import Signup from './Signup.js';
import Header from './Header.js';
import Event from './Event.js';
import './App.scss';

function App() {
  return (
    <div className="app">
    <Navigation />
    <Header />
    <Event />
    <Signup />
    </div>
  );
}

export default App;
