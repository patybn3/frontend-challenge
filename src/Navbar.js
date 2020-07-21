import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import logoTwo from './assets/techstars-logo.png';
import Navbar from 'react-bootstrap/Navbar'
import './App.scss';


function Navigation() {
    return (
      <div>
      <Navbar className="navbar" expand="md">
      <Navbar.Brand href="#">
        <div className="logo">
          <img src={logoTwo} width="140" height="30" alt="navbar logo"/>
        </div>
      </Navbar.Brand>
      </Navbar>
      </div>
    )
}

export default Navigation;
