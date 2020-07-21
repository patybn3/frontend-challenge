import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import logoTwo from './assets/techstars-logo.png';
import newYork from './assets/newyork.jpg';
import boston from './assets/boston.jpg';
import la from './assets/LA.jpeg';
import colorado from './assets/colorado.jpeg';
import Signup from './Signup.js';

const Title = styled.h1`
  font-family: 'Helvetica Neue', 'sans serif';
  font-size: 65px;
  margin-top: 7px;
  text-align: left;
  font-weight: 700;
`

const EventDetails = styled.div`
  display: inline-block;
  vertical-align: top;
  height: auto;
  width: 850px;
  margin: 15px 5px;
  padding: 20px 30px;

  @media (max-width: 768px) {
    width: 100%;
  }

`

const LinkShowTitle = styled.div`
  display: block;
  vertical-align: top;
  font-size: 30px;
  text-align: left;
  font-weight: 700;
  margin-top: 40px;
`

const LinkShow = styled.div`
  display: block;
  vertical-align: top;
  font-size: 20px;
  text-align: left;
  margin-top: 30px
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

const EventsList = styled.p`
  color: #282c34;
  cursor: pointer;
  font-size: 25px;
  text-align: left;
  margin-left: 36px;
  font-family: 'Helvetica Neue', 'sans serif';
  font-weight: 700;

  ${props =>
    props.primary &&
    css`
    color: #8298ab;
    margin-top: -5px;
    :hover {
      color: #bac9d6;
    }
  `};
`

const Logo = styled.h3`
  margin-top: 30px;
  margin-bottom: 30px;
`

const Locations = styled.div`
  background-color: #fff;
  border-radius: 10px;
  height: 250px;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 414px) {
    margin-top: 40px;
  }
`

const Img = styled.img`
  height: 250px;

  @media (max-width: 768px) {
    padding-left: -60px;
  }

  @media (max-width: 414px) {
    height: 150px;
    padding-top: 30px;
  }
`

const Cities = styled.p`
  font-size: 30px;
  font-weight: 700;
  display: inline-block;
  vertical-align: top;
  padding: 30px 85px 30px;

  @media (max-width: 414px) {
    width: 300px;
    font-size: 20px;
  }
`

const Event = props => {
  const [showText, setShowText] = useState(true);
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
    <EventsList onClick={() => setShowText(!showText) || setShowText2(false)
      || setShowText3(false) || setShowText4(false) || setShowText5(false)} >
    Start It Up
    </EventsList>


    <EventsList primary onClick={() => setShowText2(!showText2) || setShowText(false)
      || setShowText3(false) || setShowText4(false) || setShowText5(false)}>
    Locations
    </EventsList>

    <EventsList primary onClick={() => setShowText5(!showText4) || setShowText2(false)
      || setShowText3(false) || setShowText(false) || setShowText(false)}>
    Sign Up
    </EventsList>


    <EventsList primary onClick={() => setShowText3(!showText3) || setShowText2(false)
      || setShowText(false) || setShowText4(false) || setShowText5(false)}>
    Why You
    </EventsList>

    <EventsList primary onClick={() => setShowText4(!showText4) || setShowText2(false)
      || setShowText3(false) || setShowText(false) || setShowText5(false)}>
    Why Me
    </EventsList>
    </Side>

    <EventDetails>
    <div>
    <Title className="start">Start It Up</Title>
    {showText && <LinkShowTitle>About Start It Up</LinkShowTitle>}
      {showText && <LinkShow>Enjoy 5 full days of training with the experts on
        business solutions. At the end of this webinar you will be able to
        utilize our tools to best serve your company. Join the leaders in Start-Up
        training and support.
        </LinkShow>}
        {showText && <LinkShow> This webinar will teach you and your company all about
        the latest technologies on the market to develop your product. You will have
        the opportunity to learn the history of technology, its advantages and implementations
        on today's businesses.
        </LinkShow>}

          {showText && <LinkShowTitle>About Technology</LinkShowTitle>}

          {showText && <LinkShow> Technology can be viewed as an activity that forms
            or changes culture. Additionally, technology is the application of
            mathematics, science, and the arts for the benefit of life as it is known.
            A modern example is the rise of communication technology, which has lessened
            barriers to human interaction and as a result has helped spawn new subcultures;
            the rise of cyberculture has at its basis the development of the Internet and
            the computer. Not all technology enhances culture in a creative way;
            technology can also help facilitate political oppression and war via tools
            such as guns. As a cultural activity, technology predates both science and
            engineering, each of which formalize some aspects of technological
            endeavor. At this point, I believe whoever is not really
            into technology has lost interest on reading this, and whoever is still reading
            is one of us. So first of all, I would like to give credit to Wikipedia
            for letting me steal this great piece of text. With that said, the
            "Revolution" starts today at 12am. Have your computers ready and charged,
            we are taking over the world one line of code at a time, the morning
            will most certantly be weird for the unprepared. Welcome to 2020!</LinkShow>}

        {showText && <LinkShowTitle>Details</LinkShowTitle>}
        {showText && <LinkShow>This event is free of charge. By signing up you
          agree to be contacted by one of our representatives.
          By joining our network you will receive weekly information on our
          latest seminars and webinars as well as our products.
          Refreshments and materials are included in this event.</LinkShow>}

          {showText && <LinkShowTitle>Sign Up</LinkShowTitle>}
      {showText && <Signup />}
    </div>

    {showText2 && <LinkShowTitle>Where is Start It Up streaming from?</LinkShowTitle>}
    {showText2 && <Locations><Img src={colorado} alt="Denver, Colorado"/>
    <Cities>Denver, Colorado</Cities></Locations>}
    {showText2 && <Locations><Img src={boston} alt="Boston, MA"/>
    <Cities style={{paddingRight: '163px'}}>Boston, MA</Cities></Locations>}
    {showText2 && <Locations><Img src={newYork} alt="New York, NY"/>
    <Cities style={{paddingRight: '135px'}}>New York, NY</Cities></Locations>}
    {showText2 && <Locations><Img src={la} alt="Los Angeles, CA"/>
    <Cities style={{paddingRight: '95px'}}>Los Angeles, CA</Cities></Locations>}


    {showText3 && <LinkShowTitle>Why do I Want to Work With You</LinkShowTitle>}
    {showText3 && <LinkShowTitle>Because...</LinkShowTitle>}
    {showText3 && <LinkShowTitle>Of this phrase at your careers page:</LinkShowTitle>}
      {showText3 && <LinkShow>Join our team of dreamers, doers,
        and global changemakers....that is me!
        </LinkShow>}
    {showText3 && <LinkShowTitle>And this quote by Saba Karim:</LinkShowTitle>}
        {showText3 && <LinkShow> “Fostering an inclusive environment where people
          feel welcome and heard is at the core of our culture at Techstars.
          It’s also how we stay innovative.”
        </LinkShow>}
        {showText3 && <LinkShow> Innovation, creativity and an inspiring company culture,
          where you can collaborate, learn new technologies, perfect the ones you already
          know, while making friends and working in a welcoming and friendly environment is what
          I have been looking for.
        </LinkShow>}

          {showText3 && <LinkShowTitle>Because of your Code of Conduct and Values</LinkShowTitle>}

          {showText3 && <LinkShow>#GiveFirst</LinkShow>}
          {showText3 && <LinkShow>Act with Integrity</LinkShow>}
          {showText3 && <LinkShow>Treat Others With Respect</LinkShow>}
          {showText3 && <LinkShow>Quality Before Quantity</LinkShow>}
          {showText3 && <LinkShow>Network Over Hierarchy</LinkShow>}

          {showText3 && <LinkShowTitle>Because of your Mission of believing in Start-Ups
            and entrepreneurs</LinkShowTitle>}

          {showText3 && <LinkShowTitle>The innovation</LinkShowTitle>}

        {showText3 && <LinkShow>Because of the support provided to Start-Ups and
          corporations, mentoring, preparing and guiding these companies when they
          need the most, working for the founders so they can achieve their goals. I
          believe and am amazed by people with innovative ideas, that can and want to
          start their own business, that have new and brilliant ideas and I would
          love to be part of the implementation of these ideas.</LinkShow>}

          {showText3 && <LinkShowTitle>Because of your color scheme...Seriously though, good job!</LinkShowTitle>}
          {showText3 && <LinkShowTitle>Because I see the opportunity of contributing
            to the company's success and to be part of a forward-thinking culture.</LinkShowTitle>}



    {showText4 && <LinkShowTitle>Why Choose Me</LinkShowTitle>}
    {showText4 && <LinkShowTitle>First things First...</LinkShowTitle>}
    {showText4 && <LinkShow>I AM THE REALEST</LinkShow>}

    {showText4 && <LinkShow>And, if you didn't understand the above quote please
      close this page and don't ever call me because, how dare you!!!</LinkShow>}

      {showText4 && <LinkShowTitle>JUST KIDDING!!!!!</LinkShowTitle>}

      {showText4 && <LinkShowTitle>Yep, I can joke (they say)</LinkShowTitle>}

        {showText4 && <LinkShow>That is a good reason,
          I think. Don't worry, only at appropriate times (this might not even be
          an appropriate time, well, itz deeesss whaaat itz eeeesss).</LinkShow>}

          {showText4 && <LinkShowTitle>I have a cute Maltese dog...</LinkShowTitle>}

            {showText4 && <LinkShow>Her name is Luna, you might get to Zoom meet her, you are welcome!</LinkShow>}

            {showText4 && <LinkShowTitle>I love coffee, and I drink a lot of it but I
              won't be at the office so you won't have that expense.</LinkShowTitle>}

          {showText4 && <LinkShow>Actually, I take that back, because if I did have to go
            to the office I would probably buy my own coffee so you wouldn't have
            that expense anyway (do you even offer coffee?). Yes, I am a picky coffee
            drinker, America runs on Dunkin.</LinkShow>}

            {showText4 && <LinkShowTitle>Here is a Recipe I Like:</LinkShowTitle>}

              {showText4 && <LinkShow>Brazilian Cheese Rolls (Pao de Queijo)</LinkShow>}

        {showText4 && <LinkShow>This amazing, cheesy, fluffy and tasty bread is
          gluten free and only takes 5 ingredients we all have and 1 secret ingredient
          you don't have but you can, if you want:
          </LinkShow>}

          {showText4 && <LinkShow><p>Tapioca flour or tapioca starch</p><p>Eggs</p>
            <p>Milk</p><p>Cheese (shocking)</p><p>Salt</p><p>and<strong> ME</strong></p></LinkShow>}

            {showText4 && <LinkShow>To be continued once hired...
              </LinkShow>}

          {showText4 && <LinkShowTitle>I am pretty good at design,
            everything is beautiful and possible at the Front-End, oh yes,
            I love Front-End.</LinkShowTitle>}

            {showText4 && <LinkShow>And so many other
              reasons I could list but I have common sense and I will stop here.</LinkShow>}

              {showText4 && <LinkShowTitle>Subscribe to my channel for more of me
                </LinkShowTitle>}

                {showText4 && <LinkShow>(that pretty much means hire me, I don't
              actually have a channel)</LinkShow>}

              {showText4 && <LinkShowTitle>Namaste
                </LinkShowTitle>}


    {showText5 && <LinkShowTitle>Sign Up</LinkShowTitle>}
    {showText5 && <Signup />}

    </EventDetails>

    </div>
  );
}



export default Event;
