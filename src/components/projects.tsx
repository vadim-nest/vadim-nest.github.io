import '../css/projects.css';
import { useState, useRef, TouchEvent } from 'react';
import 'animate.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';

// import '~video-react/dist/video-react.css';
// import videoTest from '../assets/projects-videos/video1809203057.mp4';
// // Not in use
// import { Player } from 'video-react';

// https://betterprogramming.pub/how-to-create-react-infinite-slider-22b76cbd7a9

import tempPic from '../Macbook_pic.png';

import jsLogo from '../assets/stack/js.svg';
import cssLogo from '../assets/stack/css.svg';
import reactLogo from '../assets/stack/react.svg';

import gradient from '../assets/gradient.svg';

import externalLink from '../assets/link.svg';
import githubLogo from '../assets/github.svg';

export default function Projects() {
  const flickityRef = useRef<Flickity | null>(null);

  const flickityOptions = {
    prevNextButtons: false,
    wrapAround: true,
  };



  const flickityOptionsFrontStack = {
    prevNextButtons: false,
    wrapAround: true,
    autoPlay: 1500,
    freeScroll: true,
    cellAlign: 'left',
    pauseAutoPlayOnHover: true,
    selectedAttraction: 0.001,
    friction: 1.5,
  };

  const flickityOptionsBackStack = {
    prevNextButtons: false,
    wrapAround: true,
    autoPlay: 3000,
    freeScroll: true,
    cellAlign: 'left',
    pauseAutoPlayOnHover: true,
    selectedAttraction: 0.001,
    friction: 1.5,
  };

  const [project, setProject] = useState(0);

  const arrowNext = (
    <svg
      width='15'
      height='18'
      viewBox='0 0 15 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        className='arrow-next-color'
        d='M-4.93596e-05 9.02381L15.0005 0.364449L14.9994 17.685L-4.93596e-05 9.02381Z'
        fill='white'
        fillOpacity='0.38'
      />
    </svg>
  );

  const projectVideos = [
    <img
      src={tempPic}
      className='project-video animate__animated animate__slideInRight'
    ></img>,
    <img
      src={tempPic}
      className='project-video'
      style={{ filter: 'grayscale(100%)' }}
    ></img>,
  ];

  const projects = [
    <>
      <h1 className='h-e-text animate__animated animate__fadeInDown'>
        #newsBuzz
      </h1>
      <p className='description animate__animated animate__fadeInDown'>
        Stay up-to-date on local news by browsing through trending hashtags and
        clicking on them to read more.
      </p>
      <div id='all-stack' className='animate__animated animate__fadeInDown'>
      <div className='carousel-wrapper'>
        <div id='front-stack' className='stack'>
        <Flickity options={flickityOptionsFrontStack}>
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
        </Flickity>
        </div>
      </div>


        <div id='back-stack' className='stack'>
        <Flickity options={flickityOptionsBackStack}>

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
          </Flickity>

        </div>

        <img className='gradient-left' src={gradient} />
        <img className='gradient-right' src={gradient} />
      </div>
      <div className='links  animate__animated animate__fadeInDown'>
        <img src={externalLink} />
        <img src={githubLogo} />
      </div>
    </>,
    <>
      <h1 className='h-e-text'>aMAZEthing</h1>
      <p className='description'>Description here</p>
      <div id='all-stack'>
        <div id='front-stack' className='stack'>
          <div className='bubble bubble-white'>
            <img className='bubble-img' src={jsLogo} />
            <p>yep </p>
          </div>
          <div className='bubble bubble-black'>
            <img className='bubble-img' src={reactLogo} />
            <p>Reafwqafct</p>
          </div>
          <div className='bubble bubble-yellow'>
            <img className='bubble-img' src={cssLogo} />
            <p>CqfqwfSS</p>
          </div>
        </div>

        <div id='back-stack' className='stack'>
          <div className='bubble bubble-yellow'>
            <img className='bubble-img' src={jsLogo} />
            <p>Axqwfqwfios</p>
          </div>
          <div className='bubble bubble-white'>
            <img className='bubble-img' src={reactLogo} />
            <p>Expqfqwfress.js</p>
          </div>
          <div className='bubble bubble-black'>
            <img className='bubble-img' src={cssLogo} />
            <p>PostqwfqwfgreSQL</p>
          </div>
        </div>

        <img className='gradient-left' src={gradient} />
        <img className='gradient-right' src={gradient} />
      </div>
      <div className='links'>
        <img src={externalLink} />
        <img src={githubLogo} />
      </div>
    </>,
  ];

  function nextProject() {
    if (project !== projects.length - 1) {
      setProject(project + 1);
      flickityRef.current?.next();
    } else {
      setProject(0);
      flickityRef.current?.select(0);
    }
  }

  function previousProject() {
    if (project !== 0) {
      setProject(project - 1);
      flickityRef.current?.previous();
    } else {
      setProject(projects.length - 1);
      flickityRef.current?.select(projects.length - 1);
    }
  }

  function slideChange() {
    const changeHandler = (index: number) => {
      setProject(index);
    };

    const flkty = flickityRef.current;
    if (flkty) {
      flkty.on('change', changeHandler);
    }
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      if (flkty) {
        flkty.off('change', changeHandler);
      }
    };
  }

  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const [swipeHandled, setSwipeHandled] = useState(false);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartRef.current = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };
    setSwipeHandled(false);
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (!touchStartRef.current || swipeHandled) {
      return;
    }

    const touchEnd = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };

    const horizontalDistance = touchEnd.x - touchStartRef.current.x;
    const verticalDistance = touchEnd.y - touchStartRef.current.y;

    // Calculate the absolute distance in each direction
    const absHorizontalDistance = Math.abs(horizontalDistance);
    const absVerticalDistance = Math.abs(verticalDistance);

    // Check if the vertical distance is greater than the horizontal distance
    if (absVerticalDistance > absHorizontalDistance) {
      // It's a scroll, not a swipe
      return;
    }

    const swipeDirection = horizontalDistance > 0 ? 'right' : 'left';

    // Handle the swipe direction
    if (swipeDirection === 'right') {
      nextProject();
    } else {
      previousProject();
    }

    setSwipeHandled(true);
  };

  const handleTouchEnd = () => {
    touchStartRef.current = null;
    setSwipeHandled(false);
  };

  return (
    <div id='projects-part'>
      <h2 className='dis-text projects-header'>Recent projects</h2>
      <div className='project-video-wrapper'>
        {/* <video autoPlay muted loop controls className='project-video'>
          <source src={videoTest}
                  type="video/mp4"/>
        </video> */}
        <Flickity
          flickityRef={(el) => {
            flickityRef.current = el;
            slideChange();
          }}
          options={flickityOptions}
        >
          {projectVideos}
        </Flickity>
      </div>
      <div
        className='project-description'
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {projects[project]}
      </div>

      <div id='arrows'>
        <div className='arrow-left' onClick={previousProject}>
          {arrowNext}
        </div>
        <div className='arrow-right' onClick={nextProject}>
          {arrowNext}
        </div>
      </div>
      <div className='control-container'></div>
    </div>
  );
}
