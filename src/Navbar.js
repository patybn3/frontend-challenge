import React, { Component } from 'react';
import logoTwo from './assets/techstars-logo.png';
import Navbar from 'react-bootstrap/Navbar'
import './App.css';


class Navigation extends Component {
  state = {
    bg: 'light'
  }

  listenScrollevent = event => {
    if (window.scrollY > 50) {
      this.setState({ bg: 'light' })
    } else {
      this.setState({ bg: 'transparent'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollevent)
  }

  render() {
    return (
      <div>
      <Navbar bg={this.state.bg} sticky='top'>
      <Navbar.Brand href="#">
        <div className="logo tooltip">
          <img src={logoTwo} width="140" height="30" alt="navbar logo"/>
          <span class="tooltiptext">Home</span>
        </div>
      </Navbar.Brand>
      </Navbar>
      </div>
    )
  }
}

export default Navigation;
