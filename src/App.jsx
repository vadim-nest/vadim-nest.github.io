import './App.css';
import About from './components/about';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Contact from './components/contact';
import TheArrow from './components/theArrow';
import TheArrowDesktop from './components/theArrowDesktop';
import { useMediaQuery } from 'react-responsive';

import lightBig from './assets/light-big.svg';
import lightSmall from './assets/light-small.svg';

function App() {
  const isDesktop = useMediaQuery({ minWidth: 901 });

  return (
    <>
      <Navbar />
      <div id='main-page-wrapper'>
        <About />
        <Projects />
        <Contact />
        {isDesktop ? <TheArrowDesktop /> : <TheArrow /> }
      </div>

    </>
  );
}

export default App;
