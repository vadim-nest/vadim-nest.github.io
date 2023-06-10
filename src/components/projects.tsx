import '../css/projects.css';
import { useState, useRef, TouchEvent } from 'react';
import 'animate.css';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';
import Carousel from './carousel.jsx';

import videoTest from '../assets/projects-videos/video1809203057.mp4'; // TODO: Replace with proper videos
import amazethingVideo from '../assets/projects-videos/Amazething.mp4';

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
import { ReactComponent as GithubIcon } from '../assets/github.svg';
import { ReactComponent as ExternalLinkIcon } from '../assets/link.svg';


export default function Projects() {
  const flickityRef = useRef<Flickity | null>(null);

  const flickityOptions = {
    prevNextButtons: false,
    wrapAround: true,
    pageDots: false,
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

  type Project = {
    name: string;
    description: string;
    frontStack: string[];
    backStack: string[];
    videoSRC: string;
    links: object;
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
      videoSRC: amazethingVideo,
      links: {
        github: 'https://github.com/vadim-nest/aMAZEthing',
        website: 'https://chipper-kataifi-8ab766.netlify.app/',
      },
    },
    {
      name: '#newsBuzz',
      description:
        'Stay up-to-date on local news by browsing through trending hashtags and clicking on them to read more.',
      frontStack: ['JavaScript', 'React', 'CSS', 'Mapbox API', 'Figma'],
      backStack: ['Node.js', 'Axios', 'Express.js', 'PostgreSQL', 'Sequelize'],
      videoSRC: videoTest,
      links: {
        github: 'https://github.com/vadim-nest/Newsbuzz',
      },
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
      videoSRC: videoTest,
      links: {
        github: 'https://github.com/majilaii/aTypeical',
        website: 'https://atypeical.netlify.app/',
      },
    },
  ];

  function computeClass(index: number, classes: string[]): string {
    return classes[index % classes.length];
  }

  const logoMap: { [key: string]: string } = {
    JavaScript: jsLogo,
    CSS: cssLogo,
    React: reactLogo,
    Auth0: auth0Logo,
    Axios: axiosLogo,
    'Chart.js': chartjsLogo,
    Cypress: cypressLogo,
    'Express.js': expressLogo,
    Figma: figmaLogo,
    'fly.io': flyioLogo,
    Jest: jestLogo,
    'Mapbox API': mapboxLogo,
    MongoDB: mongoDBLogo,
    Mongoose: mongooseLogo,
    Netlify: netlifyLogo,
    'Node.js': nodejsLogo,
    'Passport.js': passportjsLogo,
    PostgreSQL: postgresqlLogo,
    Sequelize: sequelizeLogo,
    Redux: reduxLogo,
    'Socket.io': socketioLogo,
    TypeScript: typescriptLogo,
  };

  function projectLinks(links: object) {
    return Object.entries(links).map(([linkName, link]) => {
      let theLink;

      if (linkName === 'github') theLink = <GithubIcon />;
      if (linkName === 'website') theLink = <ExternalLinkIcon />;

      return (
        <div className={`${linkName}-div`}>
          <a href={link} target='_blank'>
            {theLink}
          </a>
        </div>
      );
    });
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
                    <img className='bubble-img' src={logoMap[stack]} />
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
                  <img className='bubble-img' src={logoMap[stack]} />
                  <p>{stack}</p>
                </div>
              ))}
            </Carousel>
          </div>

          <img className='gradient-left' src={gradient} />
          <img className='gradient-right' src={gradient} />
        </div>
        <div className='links animate__animated animate__fadeInDown'>
          {projectLinks(project.links)}
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
      previousProject();
    } else {
      nextProject();
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
              <video
                autoPlay
                muted
                loop
                controls
                className='project-video'
                onLoadedData={() => {
                  flickityRef.current?.resize();
                }}
              >
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
