import '../css/about.css';
import faceImg from '../assets/face2.jpg';
import TheArrow from './theArrow';
import TheArrowDesktop from './theArrowDesktop';
import { useMediaQuery } from 'react-responsive';
import { ReactComponent as GithubIcon } from '../assets/github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/linkedin.svg';

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
        {/* <div className='about-buttons'> */}
          {/* <button
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
          </button> */}
          <div className='contact-links'>
            <div className='github-div'>
              <a href='https://github.com/vadim-nest' target='_blank'>
                <GithubIcon />
              </a>
            </div>
            <div className='linkedin-div'>
              <a href='https://www.linkedin.com/in/vadim-nest/' target='_blank'>
                <LinkedInIcon />
              </a>
            </div>
            <div className='email-div'>
              <a href='mailto:vadim@gne.me.uk' className='mail-icon'>
                @
              </a>
            </div>
          </div>
        {/* </div> */}
      </div>
      <div id='face-img'>
        <img src={faceImg}></img>
      </div>
    </div>
  );
}
