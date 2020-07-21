import React from 'react';
// import { Link } from 'react-router-dom'
// calls the file Navbar.js that contains the code for the navbar
import Navigation from './Navbar.js';
// calls the file Header.js which contains the code for the interactive Header
// under the Navbar
import Header from './Header.js';
import Event from './Event.js';
import Footer from './Footer.js';
import './App.scss';

function App() {
  return (
    <div className="app">
    <Navigation />
    <Header />
    <Event/>
    <Footer />
    </div>
  );
}

export default App;
