import './App.css';
import About from './components/about';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <>
      <Navbar />
      <div id='main-page-wrapper'>
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
