import '../css/about.css';
import faceImg from '../assets/face2.jpg';
import TheArrow from './theArrow';
import TheArrowDesktop from './theArrowDesktop';
import { useMediaQuery } from 'react-responsive';

export default function About() {
  const isDesktop = useMediaQuery({ minWidth: 901 });

  return (
    <div id='welcome-part'>
      {isDesktop ? <TheArrowDesktop /> : <TheArrow />}

      <div id='about-text'>
        <h2 className='h-e-text'>Software Developer</h2>
        <p className='h-e-text'>
          I create intuitive, end-to-end products with seamless user experiences
        </p>
        <div className='about-buttons'>
          <button
            className='submit-button'
            onClick={() =>
              document
                .getElementById('contact-part')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Contact
          </button>
          <button
            className='nav-button'
            onClick={() =>
              document
                .getElementById('projects-part')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            See projects
          </button>
        </div>
      </div>
      <div id='face-img'>
        <img src={faceImg}></img>
      </div>
      <div id='shape-1' className='rounded-circle scale-up-center'></div>
      {/* <div id='shape-2' className='rounded-circle scale-up-center animation-delay-2000'></div> */}
      <div id='shape-3' className='rounded-circle scale-up-center animation-delay-4000'></div>
    </div>
  );
}
