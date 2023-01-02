import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import About from './components/about';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Contact from './components/contact';
import TheArrow from './components/theArrow';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div id='main-page-wrapper'>
        <About />
        <Projects />
        <Contact />
        <TheArrow />
      </div>

    </>
  );
}

export default App;
