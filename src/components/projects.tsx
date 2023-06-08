import '../css/projects.css';
import { useState, useRef, TouchEvent } from 'react';
import 'animate.css';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';
import Carousel from './carousel.jsx';

// import '~video-react/dist/video-react.css';
import videoTest from '../assets/projects-videos/video1809203057.mp4';
import amazethingVideo from '../assets/projects-videos/Amazething.mp4';
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

const GithubIcon = () => (
  <svg
    width='38'
    height='38'
    viewBox='0 0 38 38'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0_38_82)'>
      <path
        d='M18.9265 0.519531C8.47504 0.519531 0 8.99309 0 19.4461C0 27.8084 5.42302 34.9029 12.9432 37.4055C13.889 37.5807 14.2363 36.9949 14.2363 36.495C14.2363 36.0437 14.2187 34.5527 14.2107 32.9712C8.94514 34.1161 7.83409 30.7381 7.83409 30.7381C6.97315 28.5505 5.73266 27.9689 5.73266 27.9689C4.01553 26.7942 5.86209 26.8182 5.86209 26.8182C7.76269 26.9518 8.76345 28.7687 8.76345 28.7687C10.4515 31.6622 13.191 30.8256 14.2711 30.3421C14.4409 29.1187 14.9315 28.2839 15.4727 27.8113C11.2689 27.3325 6.84965 25.7097 6.84965 18.4576C6.84965 16.3914 7.58902 14.7029 8.79982 13.3775C8.60329 12.9007 7.95551 10.9758 8.98314 8.36876C8.98314 8.36876 10.5725 7.86006 14.1893 10.3088C15.6989 9.88935 17.3181 9.67916 18.9265 9.67204C20.535 9.67916 22.1553 9.88935 23.6679 10.3088C27.2804 7.86006 28.8675 8.36876 28.8675 8.36876C29.8977 10.9758 29.2496 12.9007 29.0531 13.3775C30.2666 14.7029 31.0009 16.3912 31.0009 18.4576C31.0009 25.7269 26.5733 27.3276 22.3588 27.7961C23.0377 28.3835 23.6425 29.5354 23.6425 31.301C23.6425 33.8334 23.6206 35.8716 23.6206 36.495C23.6206 36.9986 23.9612 37.5888 24.9207 37.403C32.4367 34.8975 37.8529 27.8056 37.8529 19.4461C37.8529 8.99309 29.379 0.519531 18.9265 0.519531Z'
        fillOpacity='0.87'
        fill='white'
        className='github-link'
      />
      <path
        d='M7.08859 27.4809C7.04702 27.5748 6.89888 27.603 6.76425 27.5386C6.62695 27.4768 6.54976 27.3486 6.59429 27.2542C6.63511 27.1574 6.78325 27.1304 6.92026 27.1954C7.05786 27.257 7.13624 27.3864 7.08859 27.4809ZM8.01959 28.3115C7.92934 28.3952 7.75284 28.3563 7.63306 28.2241C7.50926 28.0921 7.4861 27.9158 7.57769 27.8307C7.67076 27.7472 7.84191 27.7862 7.966 27.9183C8.0898 28.0517 8.11384 28.2271 8.01944 28.3117M8.65831 29.3743C8.54224 29.4549 8.35253 29.3794 8.23541 29.211C8.11949 29.0429 8.11949 28.841 8.23794 28.7601C8.3555 28.6792 8.54224 28.7519 8.66099 28.9189C8.77677 29.0901 8.77677 29.2919 8.65816 29.3745M9.73835 30.6053C9.63459 30.7196 9.41371 30.689 9.25191 30.5329C9.08656 30.3803 9.04039 30.1637 9.14445 30.0493C9.24939 29.9347 9.4716 29.9669 9.63459 30.1217C9.79891 30.274 9.84908 30.4922 9.73849 30.6053M11.1343 31.0209C11.0887 31.1691 10.8758 31.2365 10.6615 31.1735C10.4474 31.1087 10.3073 30.935 10.3505 30.7852C10.395 30.636 10.6088 30.5658 10.8248 30.6332C11.0385 30.6978 11.1789 30.8701 11.1344 31.0209M12.7231 31.1971C12.7285 31.3533 12.5466 31.4827 12.3216 31.4856C12.0952 31.4904 11.9122 31.3641 11.9098 31.2106C11.9098 31.053 12.0875 30.9248 12.3137 30.921C12.5388 30.9166 12.7231 31.042 12.7231 31.1971ZM14.2838 31.1373C14.3108 31.2896 14.1544 31.4461 13.931 31.4876C13.7113 31.5277 13.5079 31.4337 13.4799 31.2828C13.4525 31.1266 13.612 30.9703 13.8312 30.9298C14.0551 30.8909 14.2553 30.9825 14.2838 31.1373Z'
        fillOpacity='0.87'
        fill='white'
        className='github-link'
      />
    </g>
    <defs>
      <clipPath id='clip0_38_82'>
        <rect width='38' height='38' fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    width='37'
    height='37'
    viewBox='0 0 37 37'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M27.75 20.0417V29.2917C27.75 30.1094 27.4251 30.8937 26.8469 31.4719C26.2687 32.0501 25.4844 32.375 24.6667 32.375H7.70833C6.89058 32.375 6.10632 32.0501 5.52809 31.4719C4.94985 30.8937 4.625 30.1094 4.625 29.2917V12.3333C4.625 11.5156 4.94985 10.7313 5.52809 10.1531C6.10632 9.57485 6.89058 9.25 7.70833 9.25H16.9583'
      stroke='white'
      strokeOpacity='0.87'
      strokeWidth='3'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='website-link'
    />
    <path
      d='M23.125 4.625H32.375V13.875'
      stroke='white'
      strokeOpacity='0.87'
      strokeWidth='3'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='website-link'
    />
    <path
      d='M15.4166 21.5833L32.375 4.625'
      stroke='white'
      strokeOpacity='0.87'
      strokeWidth='3'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='website-link'
    />
  </svg>
);

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
    links: object;
  };

  // <iframe src="https://onedrive.live.com/embed?cid=289DDE8040624C14&resid=289DDE8040624C14%21154863&authkey=AIqIyZ1AVYLfEd0" width="320" height="206" frameborder="0" scrolling="no" allowfullscreen></iframe>

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

  const linkMap: { [key: string]: string } = {
    github: githubLogo,
    website: externalLink,
  };

  function projectLinks(links: object) {
    console.log(links);

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
          {/* {project.links.map()} */}

          {/* <img src={externalLink} />
          <img src={githubLogo} /> */}
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
