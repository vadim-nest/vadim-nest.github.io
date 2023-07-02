import { useEffect } from 'react';
import '../css/navbar.css';
import { useMediaQuery } from 'react-responsive';

export default function Navbar() {
  const isDesktop = useMediaQuery({ minWidth: 901 });
  const vh = window.innerHeight;

  const nav = {
    about: { name: 'About', id: 'welcome-part', position: 0 },
    project: { name: 'Projects', id: 'projects-part', position: vh },
    contact: { name: 'Contact', id: 'contact-part', position: vh * 2 },
  };

  const handleNavClick = (navItem: any) => {
    if (navItem) {
      document
        .getElementById(navItem.id)
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavScroll = () => {
    const { scrollY } = window;
    const adjScrollVh = scrollY + vh * 0.5;
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach((btn) => (btn.className = 'nav-button dis-text'));

    if (
      adjScrollVh >= nav.about.position &&
      adjScrollVh < nav.project.position
    ) {
      navButtons[0].className = 'nav-button current-view';
    } else if (
      adjScrollVh >= nav.project.position &&
      ((!isDesktop && adjScrollVh < nav.contact.position) ||
        (isDesktop && adjScrollVh < nav.contact.position * 0.9))
    ) {
      navButtons[1].className = 'nav-button current-view';
    } else if (
      (!isDesktop && adjScrollVh >= nav.contact.position) ||
      (isDesktop && adjScrollVh >= nav.contact.position * 0.9)
    ) {
      navButtons[2].className = 'nav-button current-view';
    }
  };

  useEffect(() => {
    handleNavScroll();
    window.addEventListener('scroll', handleNavScroll);
    return () => {
      window.removeEventListener('scroll', handleNavScroll);
    };
  }, []); // Empty dependency array to run only on mount and unmount

  return (
    <nav>
      <div className='navbar'>
        <h2 className='logo h-e-text'>VG</h2>
        <div className='nav-buttons'>
          {Object.values(nav).map((navItem) => (
            <button
              className='nav-button dis-text'
              onClick={() => handleNavClick(navItem)}
            >
              {navItem.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
