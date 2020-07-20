import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import logoTwo from './assets/techstars-logo.png';

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
    <h3 onClick={() => setShowText(!showText)}>
    <h3 onClick={() => setShowText2(false)}>
    <h3 onClick={() => setShowText3(false)}>
    <h3 onClick={() => setShowText4(false)}>
    <h3 onClick={() => setShowText5(false)}>
    <EventsList>Event</EventsList>
    </h3>
    </h3>
    </h3>
    </h3>
    </h3>

    <h3 onClick={() => setShowText2(!showText2)}>
    <h3 onClick={() => setShowText(false)}>
    <h3 onClick={() => setShowText3(false)}>
    <h3 onClick={() => setShowText4(false)}>
    <h3 onClick={() => setShowText5(false)}>
    <EventsList primary>Locations</EventsList>
    </h3>
    </h3>
    </h3>
    </h3>
    </h3>
    <h3 onClick={() => setShowText3(!showText3)}>
    <h3 onClick={() => setShowText2(false)}>
    <h3 onClick={() => setShowText(false)}>
    <h3 onClick={() => setShowText4(false)}>
    <h3 onClick={() => setShowText5(false)}>
    <EventsList primary>Sign Up</EventsList>
    </h3>
    </h3>
    </h3>
    </h3>
    </h3>
    <h3 onClick={() => setShowText4(!showText4)}>
    <h3 onClick={() => setShowText2(false)}>
    <h3 onClick={() => setShowText3(false)}>
    <h3 onClick={() => setShowText(false)}>
    <h3 onClick={() => setShowText5(false)}>
    <EventsList primary>Why You</EventsList>
    </h3>
    </h3>
    </h3>
    </h3>
    </h3>
    <h3 onClick={() => setShowText5(showText5)}>
    <h3 onClick={() => setShowText2(false)}>
    <h3 onClick={() => setShowText3(false)}>
    <h3 onClick={() => setShowText4(false)}>
    <h3 onClick={() => setShowText(false)}>
    <EventsList primary>Why Me</EventsList>
    </h3>
    </h3>
    </h3>
    </h3>
    </h3>


    </Side>
    <EventDetails>
    <Title className="start">Start It Up</Title>
    {showText && <h6>This text will show!</h6>}

    {showText2 && <h6>This text frwill show!</h6>}

    {showText3 && <h6>This text ggfgwill show!</h6>}

    {showText4 && <h6>This text ggrgwill show!</h6>}

    {showText5 && <h6>This teklhkxt grgwill show!</h6>}
    </EventDetails>
    </div>
  );
}



export default Event;
