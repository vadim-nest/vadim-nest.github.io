import videoTest from '../../assets/projects-videos/video1809203057.mp4'; // TODO: Replace with proper videos
import amazethingVideo from '../../assets/projects-videos/Amazething-720p.mp4';
import { Project } from '../../types/myTypes';

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

export default projects;