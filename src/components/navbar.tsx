import '../css/navbar.css';

window.addEventListener('scroll', handleNavScroll);

function handleNavScroll() {

}

export default function Navbar() {
  return (
    <nav id="navbar">
      <h2 id='logo' className='h-e-text'>VG</h2>
      <div id='nav-buttons'>
        <button className='nav-button'><p className='h-e-text'>About</p></button>
        <button className='nav-button'><p className='dis-text'>Projects</p></button>
        <button className='nav-button'><p className='dis-text'>Contact</p></button>
      </div>
    </nav>
  )
}