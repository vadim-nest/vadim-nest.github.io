import '../css/about.css';
import faceImg from '../assets/face2.jpg';

export default function About() {
  return (
    <div id='welcome-part'>
      <div id='about-text'>
        <h2 className='h-e-text'>Software Developer</h2>
        <p className='h-e-text'>
          I create intuitive, end-to-end products with seamless user experiences
        </p>
      </div>
      <div id='face-img'>
        <img src={faceImg}></img>
      </div>
    </div>
  );
}
