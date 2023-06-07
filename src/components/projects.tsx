import '../css/projects.css';
import { useState, useRef, TouchEvent } from 'react';
import 'animate.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';
import Carousel from './carousel.jsx';

// import '~video-react/dist/video-react.css';
import videoTest from '../assets/projects-videos/video1809203057.mp4';
// // Not in use
// import { Player } from 'video-react';

import tempPic from '../Macbook_pic.png';

import jsLogo from '../assets/stack/js.svg';
import cssLogo from '../assets/stack/css.svg';
import reactLogo from '../assets/stack/react.svg';

import auth0Logo from '../assets/stack/auth0.svg';
import axiosLogo from '../assets/stack/Axios.svg';
import chartjsLogo from '../assets/stack/chartjs.svg';
import cypressLogo from '../assets/stack/Cypress.svg';
import expressLogo from '../assets/stack/expressjs.svg';
import figmaLogo from '../assets/stack/figma.svg';
import flyioLogo from '../assets/stack/flyio.svg';
import jestLogo from '../assets/stack/jest.svg';
import mapboxLogo from '../assets/stack/mapbox.svg';
import mongoDBLogo from '../assets/stack/mongodb.svg';
import mongooseLogo from '../assets/stack/Mongoose.svg';
import netlifyLogo from '../assets/stack/Netlify.svg';
import nodejsLogo from '../assets/stack/nodejs.svg';
import passportjsLogo from '../assets/stack/passport.svg';
import postgresqlLogo from '../assets/stack/Postgresql.svg';
import reduxLogo from '../assets/stack/redux.svg';
import sequelizeLogo from '../assets/stack/sequelize.svg';
import socketioLogo from '../assets/stack/socketio.svg';
import typescriptLogo from '../assets/stack/Typescript.svg';

import gradient from '../assets/gradient.svg';

import externalLink from '../assets/link.svg';
import githubLogo from '../assets/github.svg';

export default function Projects() {
  const flickityRef = useRef<Flickity | null>(null);

  const flickityOptions = {
    prevNextButtons: false,
    wrapAround: true,
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

  // const projectVideos = [
  //   <img
  //     src={tempPic}
  //     className='project-video animate__animated animate__slideInRight'
  //   ></img>,
  //   <img
  //     src={tempPic}
  //     className='project-video'
  //     style={{ filter: 'grayscale(100%)' }}
  //   ></img>,
  // ];

  type Project = {
    name: string;
    description: string;
    frontStack: string[];
    backStack: string[];
    videoSRC: string;
  };

  const projects: Project[] = [
    {
      name: 'aMAZEthing',
      description:
        'A real-time multiplayer game with a learning component. Algorithms such as Merge Sort and A* pathfinding are visualised to aid in understanding.',
      frontStack: [
        'React',
        'TypeScript',
        'Redux',
        'Netlify',
        'Figma',
        'Cypress',
        'CSS',
      ],
      backStack: [
        'MongoDB',
        'Auth0',
        'Express.js',
        'Mongoose',
        'Socket.io',
        'fly.io',
        'Jest',
        'Node.js',
      ],
      videoSRC: videoTest,
    },
    {
      name: '#newsBuzz',
      description:
        'Stay up-to-date on local news by browsing through trending hashtags and clicking on them to read more.',
      frontStack: ['JavaScript', 'React', 'CSS', 'Mapbox API', 'Figma'],
      backStack: ['Node.js', 'Axios', 'Express.js', 'PostgreSQL', 'Sequelize'],
      videoSRC: tempPic,
    },
    {
      name: 'aTYPEical',
      description:
        'An application focused on improving typing skills and speed. Features include personalised practice, real-time progress tracking, and customisable practice texts.',
      frontStack: [
        'TypeScript',
        'React',
        'CSS',
        'Netlify',
        'Cypress',
        'Chart.js',
        'Redux',
      ],
      backStack: [
        'Mongoose',
        'Socket.io',
        'PostgreSQL',
        'fly.io',
        'Jest',
        'Passport.js',
      ],
      videoSRC: tempPic,
    },
  ];

  function computeClass(index: number, classes: string[]): string {
    return classes[index % classes.length];
  }

  function stackLogo(stack: string) {
    let logoSRC;
    if (stack === 'JavaScript') logoSRC = jsLogo;
    if (stack === 'CSS') logoSRC = cssLogo;
    if (stack === 'React') logoSRC = reactLogo;
    if (stack === 'Auth0') logoSRC = auth0Logo;
    if (stack === 'Axios') logoSRC = axiosLogo;
    if (stack === 'Chart.js') logoSRC = chartjsLogo;
    if (stack === 'Cypress') logoSRC = cypressLogo;
    if (stack === 'Express.js') logoSRC = expressLogo;
    if (stack === 'Figma') logoSRC = figmaLogo;
    if (stack === 'fly.io') logoSRC = flyioLogo;
    if (stack === 'Jest') logoSRC = jestLogo;
    if (stack === 'Mapbox API') logoSRC = mapboxLogo;
    if (stack === 'MongoDB') logoSRC = mongoDBLogo;
    if (stack === 'Mongoose') logoSRC = mongooseLogo;
    if (stack === 'Netlify') logoSRC = netlifyLogo;
    if (stack === 'Node.js') logoSRC = nodejsLogo;
    if (stack === 'Passport.js') logoSRC = passportjsLogo;
    if (stack === 'PostgreSQL') logoSRC = postgresqlLogo;
    if (stack === 'Sequelize') logoSRC = sequelizeLogo;
    if (stack === 'Redux') logoSRC = reduxLogo;
    if (stack === 'Socket.io') logoSRC = socketioLogo;
    if (stack === 'TypeScript') logoSRC = typescriptLogo;

    return logoSRC;
  }

  function projectStructure(project: Project, key: number) {
    const frontClasses = ['bubble-white', 'bubble-black', 'bubble-yellow'];
    const backClasses = ['bubble-yellow', 'bubble-white', 'bubble-black'];

    return (
      <div className='project-description' key={key}>
        <h1 className='h-e-text animate__animated animate__fadeInDown'>
          {project.name}
        </h1>
        <p className='description animate__animated animate__fadeInDown'>
          {project.description}
        </p>
        <div id='all-stack' className='animate__animated animate__fadeInDown'>
          <div className='carousel-wrapper'>
            <div id='front-stack' className='stack'>
              <Carousel>
                {project.frontStack.map((stack: string, index: number) => (
                  <div
                    className={`bubble ${computeClass(index, frontClasses)}`}
                  >
                    {/* {stackLogo(stack)} */}
                    <img className='bubble-img' src={stackLogo(stack)} />
                    <p>{stack}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          <div id='back-stack' className='stack'>
            <Carousel speed={'slow'}>
              {project.backStack.map((stack: string, index: number) => (
                <div className={`bubble ${computeClass(index, backClasses)}`}>
                  <img className='bubble-img' src={stackLogo(stack)} />
                  <p>{stack}</p>
                </div>
              ))}
            </Carousel>
          </div>

          <img className='gradient-left' src={gradient} />
          <img className='gradient-right' src={gradient} />
        </div>
        <div className='links animate__animated animate__fadeInDown'>
          <img src={externalLink} />
          <img src={githubLogo} />
        </div>
      </div>
    );
  }

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
          {projects.map((project) => {
            console.log(project.videoSRC);

            return (
              <video autoPlay muted loop controls className='project-video'>
                <source src={project.videoSRC} type='video/mp4' />
              </video>
            );
          })}
        </Flickity>
      </div>
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {
          projects.map((project, index) => projectStructure(project, index))[
            project
          ]
        }
        {}
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
