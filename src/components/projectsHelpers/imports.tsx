import jsLogo from '../../assets/stack/js.svg';
import cssLogo from '../../assets/stack/css.svg';
import reactLogo from '../../assets/stack/react.svg';
import auth0Logo from '../../assets/stack/auth0.svg';
import axiosLogo from '../../assets/stack/Axios.svg';
import chartjsLogo from '../../assets/stack/chartjs.svg';
import cypressLogo from '../../assets/stack/Cypress.svg';
import expressLogo from '../../assets/stack/expressjs.svg';
import figmaLogo from '../../assets/stack/figma.svg';
import flyioLogo from '../../assets/stack/flyio.svg';
import jestLogo from '../../assets/stack/jest.svg';
import mapboxLogo from '../../assets/stack/mapbox.svg';
import mongoDBLogo from '../../assets/stack/mongodb.svg';
import mongooseLogo from '../../assets/stack/Mongoose.svg';
import netlifyLogo from '../../assets/stack/Netlify.svg';
import nodejsLogo from '../../assets/stack/nodejs.svg';
import passportjsLogo from '../../assets/stack/passport.svg';
import postgresqlLogo from '../../assets/stack/Postgresql.svg';
import reduxLogo from '../../assets/stack/redux.svg';
import sequelizeLogo from '../../assets/stack/sequelize.svg';
import socketioLogo from '../../assets/stack/socketio.svg';
import typescriptLogo from '../../assets/stack/Typescript.svg';

import gradient from '../../assets/gradient.svg';
// import arrowNext from '../../assets/arrowNext.svg';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { ReactComponent as ExternalLinkIcon } from '../../assets/link.svg';

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

export default {
  logoMap,
  gradient,
  arrowNext,
  GithubIcon,
  ExternalLinkIcon,
};
