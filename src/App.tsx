import { useState } from 'react'
import './App.css';
import About from './components/about';
import Navbar from './components/navbar';
import Projects from './components/projects';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div id='main-page-wrapper'>
        <About />
        <Projects />
      </div>
    </>
  )
}

export default App
