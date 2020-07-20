import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import logoTwo from './assets/techstars-logo.png';
import Signup from './Signup.js';

const Title = styled.h1`
  font-family: 'Helvetica Neue', 'sans serif';
  font-size: 60px;
  margin-top: 7px;
  text-align: left;
`

const EventDetails = styled.div`
  display: inline-block;
  vertical-align: top;
  background: #fafafa;
  height: auto;
  width: 850px;
  margin: 15px 5px;
  padding: 20px 30px;
`

const LinkShow = styled.div`
  display: block;
  vertical-align: top;
  background: gray;
  padding: 20px 30px;
`

const Side = styled.div`
  display: inline-block;
  vertical-align: top;
  height: auto;
  width: 250px;
  margin: 15px 5px;
  padding: 20px;
  text-align: center;
  font-weight: 600;
`

const EventsList = styled.h3`
  color: #282c34;
  cursor: pointer;
  font-size: 25px;
  text-align: left;
  margin-left: 56px;

  ${props =>
    props.primary &&
    css`
    color: #8298ab;
    margin-top: -15px;
    :hover {
      color: #bac9d6;
    }
  `};
`

const Logo = styled.h3`
  margin-top: 30px;
`

const Event = props => {
  const [showText, setShowText] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showText4, setShowText4] = useState(false);
  const [showText5, setShowText5] = useState(false);

  if (showText === true) {

  }
  return (
    <div>
    <Side>
    <Logo>
    <img src={logoTwo} width="140" height="30" alt="navbar logo"/>
    </Logo>
    <p onClick={() => setShowText(!showText)}>
    <p onClick={() => setShowText2(false)}>
    <p onClick={() => setShowText3(false)}>
    <p onClick={() => setShowText4(false)}>
    <p onClick={() => setShowText5(false)}>
    <EventsList>Event</EventsList>
    </p>
    </p>
    </p>
    </p>
    </p>

    <p onClick={() => setShowText2(!showText2)}>
    <p onClick={() => setShowText(false)}>
    <p onClick={() => setShowText3(false)}>
    <p onClick={() => setShowText4(false)}>
    <p onClick={() => setShowText5(false)}>
    <EventsList primary>Locations</EventsList>
    </p>
    </p>
    </p>
    </p>
    </p>
    <p onClick={() => setShowText3(!showText3)}>
    <p onClick={() => setShowText2(false)}>
    <p onClick={() => setShowText(false)}>
    <p onClick={() => setShowText4(false)}>
    <p onClick={() => setShowText5(false)}>
    <EventsList primary>Sign Up</EventsList>
    </p>
    </p>
    </p>
    </p>
    </p>
    <p onClick={() => setShowText4(!showText4)}>
    <p onClick={() => setShowText2(false)}>
    <p onClick={() => setShowText3(false)}>
    <p onClick={() => setShowText(false)}>
    <p onClick={() => setShowText5(false)}>
    <EventsList primary>Why You</EventsList>
    </p>
    </p>
    </p>
    </p>
    </p>
    <p onClick={() => setShowText5(showText5)}>
    <p onClick={() => setShowText2(false)}>
    <p onClick={() => setShowText3(false)}>
    <p onClick={() => setShowText4(false)}>
    <p onClick={() => setShowText(false)}>
    <EventsList primary>Why Me</EventsList>
    </p>
    </p>
    </p>
    </p>
    </p>


    </Side>
    <EventDetails>
    <Title className="start">Start It Up</Title>
    {showText && <h6>This text will show!</h6>}

    {showText2 && <h6>This text frwill show!</h6>}

    {showText3 && <h6>This text ggfgwill show!</h6>}

    {showText4 && <h6>This text ggrgwill show!</h6>}

    {showText5 && <h6>This teklhkxt grgwill show!</h6>}

    <Signup />
    </EventDetails>

    </div>
  );
}



export default Event;
