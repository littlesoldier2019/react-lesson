import React from 'react';
import Toggle from './Toggle.js';
import Greeting from './Greeting.js';
import './Header.css';


  class Header extends React.Component {
    render() {
      return (
        <div className='header'>
            <Title></Title>
            <SubTitle></SubTitle>
            <TagLine></TagLine>
            <Clock></Clock>
            <Toggle></Toggle>
            <Greeting></Greeting>
        </div>
      )
    }
  }

  class Title extends React.Component {
    render() {
      return <h1 className='title'>React lesson</h1>;
    }
  }

  class SubTitle extends React.Component {
    render() {
      return <h3 className='sub-title'>My first webpage with React</h3>;
    }
  }

  class TagLine extends React.Component {
    render() {
      return <h3 className='tag-line'>Enjoy your journey. Have fun!</h3>;
    }
  }


  class Clock extends React.Component {
    render() {
      return <p className='clock'>Today is {new Date().toLocaleDateString()}.</p>;
    }
  }

export default Header;