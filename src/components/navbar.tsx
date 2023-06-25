import { useEffect } from 'react';
import '../css/navbar.css';
import { useMediaQuery } from 'react-responsive';


// TODO: instead of vh, need to actually calculate the position of elements (using refs)

export default function Navbar() {
  const isDesktop = useMediaQuery({ minWidth: 901 });
  let vh = window.innerHeight;

  const aboutPos = 0;
  let projectsPos = vh;
  let contactPos = vh * 2;

  const handleNavClick = (position: string) => {
    // ref.current.scrollIntoView({ behavior: 'smooth' });
    if (position === 'about') {
      document.getElementById('welcome-part')?.scrollIntoView({behavior: 'smooth'});
    } else if (position === 'projects') {
      document.getElementById('projects-part')?.scrollIntoView({behavior: 'smooth'});
    } else if (position === 'contact') {
      document.getElementById('contact-part')?.scrollIntoView({behavior: 'smooth'});
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
      ((!isDesktop && scrollY + vh * 0.5 >= contactPos) || scrollY + vh * 0.5 < contactPos * 0.75)
    ) {
      navButtons[1].className = 'nav-button current-view';
    } else if ((!isDesktop && scrollY + vh * 0.5 >= contactPos) || scrollY + vh * 0.5 >= contactPos * 0.75) {
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
    <nav>
      <div id='navbar'>
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
      </div>
    </nav>
  );
}
