import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import React from 'react';

const Foot = styled.div`
  padding: 30px 10px;
`

function Footer() {
    return (
      <Foot>
      &copy; {new Date().getFullYear()} Copyright: <a href="https://www.pantlitz.dev">
       Patricia Antlitz </a>for <a href="https://www.techstars.com">Techstars_</a>
      </Foot>
    )
}

export default Footer;
