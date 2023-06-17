import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import About from './components/about';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Contact from './components/contact';
import TheArrow from './components/theArrow';

import lightBig from './assets/light-big.svg';
import lightSmall from './assets/light-small.svg';
import TheArrowDesktop from './components/theArrowDesktop';
import { useMediaQuery } from 'react-responsive';


function App() {
  const isDesktop = useMediaQuery({ minWidth: 901 });

  return (
    <>
      <Navbar />
      <div id='main-page-wrapper'>
        <About />
        <Projects />
        <Contact />
        {/* <TheArrow /> */}
        {/* <img className='light-big' src={lightBig} />
        <img className='light-small' src={lightSmall} /> */}
        {/* <TheArrowDesktop /> */}
        {isDesktop ? <TheArrowDesktop /> : <TheArrow /> }
      </div>

    </>
  );
}

export default App;
