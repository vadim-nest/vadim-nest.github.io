import '../css/about.css';
import faceImg from '../assets/face.jpg';
import TheArrow from './theArrow';
import TheArrowDesktop from './theArrowDesktop';
import { useMediaQuery } from 'react-responsive';
import { ReactComponent as GithubIcon } from '../assets/github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/linkedin.svg';

export default function About() {
  const isDesktop = useMediaQuery({ minWidth: 901 });

  const links = [
    {
      href: 'https://github.com/vadim-nest',
      target: '_blank',
      children: <GithubIcon />,
      className: 'github-div',
    },
    {
      href: 'https://www.linkedin.com/in/vadim-nest/',
      target: '_blank',
      children: <LinkedInIcon />,
      className: 'linkedin-div',
    },
    {
      href: 'mailto:vadim@gne.me.uk',
      className: 'mail-icon',
      children: '@',
      divClassName: 'email-div',
    },
  ];

  return (
    <div id='welcome-part'>
      {isDesktop ? <TheArrowDesktop /> : <TheArrow />}
      <div className='about-text'>
        <h2 className='h-e-text'>Software Developer</h2>
        <p className='h-e-text'>
          I create intuitive, end-to-end products with seamless user experiences
        </p>
        <div className='contact-links'>
          {links.map((link, index) => (
            <div
              className={link.divClassName ? link.divClassName : link.className}
              key={index}
            >
              <a
                href={link.href}
                target={link.target}
                className={link.className}
              >
                {link.children}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div id='face-img'>
        <img src={faceImg} alt='Face' />
      </div>
    </div>
  );
}
