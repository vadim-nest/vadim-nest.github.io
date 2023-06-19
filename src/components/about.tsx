import '../css/about.css';
import faceImg from '../assets/face2.jpg';
import { useMediaQuery } from 'react-responsive';

export default function About() {
  const isDesktop = useMediaQuery({ minWidth: 901 });

  return (
    <div id='welcome-part'>
      <div id='about-text'>
        <h2 className='h-e-text'>Software Developer</h2>
        <p className='h-e-text'>
          I create intuitive, end-to-end products with seamless user experiences
        </p>
        {isDesktop && (<div className='about-buttons'>
          <button className='submit-button' onClick={() => document.getElementById('contact-part')?.scrollIntoView({behavior: 'smooth'})}>Contact</button>
          <button className='nav-button' onClick={() => document.getElementById('projects-part')?.scrollIntoView({behavior: 'smooth'})}>See projects</button>
        </div>)}
      </div>
      <div id='face-img'>
        <img src={faceImg}></img>
      </div>
    </div>
  );
}
