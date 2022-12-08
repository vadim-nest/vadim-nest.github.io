import '../css/projects.css';
// import '~video-react/dist/video-react.css';
import videoTest from '../assets/projects-videos/video1809203057.mp4';
import { Player } from 'video-react';

export default function Projects () {
  return (
    <div id='projects-part'>
      <h1 className='dis-text projects-header'>Projects</h1>
      <h1 className='h-e-text'>Stopwatch</h1>
      <p>Simple stopwatch made with Vanilla JavaScript.</p>
      <div className='project-video-wrapper'>
        <video autoPlay muted loop controls className='project-video'>
          <source src={videoTest}
                  type="video/mp4"/>
        </video>
      </div>
    </div>
  );
}
