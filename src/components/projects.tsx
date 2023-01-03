import '../css/projects.css';
// import '~video-react/dist/video-react.css';
// import videoTest from '../assets/projects-videos/video1809203057.mp4';
// // Not in use
// import { Player } from 'video-react';

import tempPic from '../Macbook_pic.png';

import jsLogo from '../assets/stack/js.svg';
import cssLogo from '../assets/stack/css.svg';
import reactLogo from '../assets/stack/react.svg';

import gradient from '../assets/gradient.svg';

import externalLink from '../assets/link.svg';
import githubLogo from '../assets/github.svg';

export default function Projects() {

  const arrowNext = (
    <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="arrow-next-color" d="M-4.93596e-05 9.02381L15.0005 0.364449L14.9994 17.685L-4.93596e-05 9.02381Z" fill="white" fill-opacity="0.38"/>
    </svg>
  );

  return (
    <div id='projects-part'>
      <h2 className='dis-text projects-header'>Recent projects</h2>
      <div className='project-video-wrapper'>
        {/* <video autoPlay muted loop controls className='project-video'>
          <source src={videoTest}
                  type="video/mp4"/>
        </video> */}
        <img src={tempPic} className='project-video'></img>
      </div>
      <div className='project-description'>
        <h1 className='h-e-text'>#newsBuzz</h1>
        <p className='description'>
          Stay up-to-date on local news by browsing through trending hashtags
          and clicking on them to read more.
        </p>
        <div id='all-stack'>
          <div id='front-stack' className='stack'>
            <div className='bubble bubble-white'>
              <img className='bubble-img' src={jsLogo} />
              <p>JavaScript</p>
            </div>
            <div className='bubble bubble-black'>
              <img className='bubble-img' src={reactLogo} />
              <p>React</p>
            </div>
            <div className='bubble bubble-yellow'>
              <img className='bubble-img' src={cssLogo} />
              <p>CSS</p>
            </div>
          </div>

          <div id='back-stack' className='stack'>
            <div className='bubble bubble-yellow'>
              <img className='bubble-img' src={jsLogo} />
              <p>Axios</p>
            </div>
            <div className='bubble bubble-white'>
              <img className='bubble-img' src={reactLogo} />
              <p>Express.js</p>
            </div>
            <div className='bubble bubble-black'>
              <img className='bubble-img' src={cssLogo} />
              <p>PostgreSQL</p>
            </div>
          </div>

          <img className='gradient-left' src={gradient}/>
          <img className='gradient-right' src={gradient}/>

        </div>
        <div className='links'>
          <img src={externalLink} />
          <img src={githubLogo} />
        </div>
      </div>

      <div id='arrows'>
        <div className='arrow-left'>{arrowNext}</div>
        <div className='arrow-right'>{arrowNext}</div>
      </div>
    </div>
  );
}
