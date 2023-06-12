import React, { useRef, useEffect } from 'react';
import '../css/navbar.css';

// TODO: instead of vh, need to actually calculate the position of elements (using refs)

export default function Navbar() {
  let vh = window.innerHeight;

  const aboutPos = 0;
  const projectsPos = vh;
  const contactPos = vh * 2;

  const handleNavClick = (position: string) => {
    // ref.current.scrollIntoView({ behavior: 'smooth' });
    if (position === 'about') {
      window.scrollTo({
        top: aboutPos,
        behavior: 'smooth',
      });
    } else if (position === 'projects') {
      window.scrollTo({
        top: projectsPos - (vh * 0.07),
        behavior: 'smooth',
      });
    } else if (position === 'contact') {
      window.scrollTo({
        top: contactPos,
        behavior: 'smooth',
      });
    }
  };

  const handleNavScroll = () => {
    const { scrollY } = window;
    const navButtons = document.querySelectorAll('.nav-button');

    // Reset all button classes to 'dis-text'
    navButtons.forEach((btn) => (btn.className = 'nav-button dis-text'));

    // Depending on the scroll position, set one button's class to 'h-e-text'
    if (scrollY + vh * 0.5 >= aboutPos && scrollY + vh * 0.5 < projectsPos) {
      navButtons[0].className = 'nav-button current-view';
    } else if (
      scrollY + vh * 0.5 >= projectsPos &&
      scrollY + vh * 0.5 < contactPos
    ) {
      navButtons[1].className = 'nav-button current-view';
    } else if (scrollY + vh * 0.5 >= contactPos) {
      navButtons[2].className = 'nav-button current-view';
    }
  };

  useEffect(() => {
    handleNavScroll();
    window.addEventListener('scroll', handleNavScroll);
    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleNavScroll);
    };
  }, []); // Empty dependency array to run only on mount and unmount

  return (
    <nav id='navbar'>
      <h2 id='logo' className='h-e-text'>
        VG
      </h2>
      <div id='nav-buttons'>
        <button
          className='nav-button dis-text'
          onClick={() => handleNavClick('about')}
        >
          About
        </button>
        <button
          className='nav-button dis-text'
          onClick={() => handleNavClick('projects')}
        >
          Projects
        </button>
        <button
          className='nav-button dis-text'
          onClick={() => handleNavClick('contact')}
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
