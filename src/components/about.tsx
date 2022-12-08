import '../css/about.css';
import faceImg from '../assets/face2.jpg';

export default function About () {
  return (
      <div id='welcome-part'>
        <div id='about-text'>
          <h2 className='h-e-text'>Web Developer</h2>
          <h2 className='h-e-text'>in London, UK</h2>
          <p className='h-e-text'>JavaScript, CSS, HTML</p>
        </div>
        <div id='face-img'>
          <img src={faceImg}></img>
        </div>
      </div>
  );
}