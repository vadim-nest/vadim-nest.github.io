import '../css/projects.css';
import { useState, useRef, TouchEvent } from 'react';
import { useMediaQuery } from 'react-responsive';
import 'animate.css';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';
import imports from './projectsHelpers/imports';
import projects from './projectsHelpers/projectsContent';
import projectStructure from './projectsHelpers/projectStructure';

export default function Projects() {
  const isDesktop = useMediaQuery({ minWidth: 901 });
  const flickityRef = useRef<Flickity | null>(null);

  const flickityOptions = {
    prevNextButtons: false,
    wrapAround: true,
    pageDots: true,
    lazyLoad: true
  };

  const [project, setProject] = useState(0);

  function nextProject() {
    if (project !== projects.length - 1) {
      setProject(project + 1);
      flickityRef.current?.next();
    } else {
      setProject(0);
      flickityRef.current?.select(0);
    }
  }

  function previousProject() {
    if (project !== 0) {
      setProject(project - 1);
      flickityRef.current?.previous();
    } else {
      setProject(projects.length - 1);
      flickityRef.current?.select(projects.length - 1);
    }
  }

  function slideChange() {
    const changeHandler = (index: number) => {
      setProject(index);
    };

    const flkty = flickityRef.current;
    if (flkty) {
      flkty.on('change', changeHandler);
    }
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      if (flkty) {
        flkty.off('change', changeHandler);
      }
    };
  }

  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const [swipeHandled, setSwipeHandled] = useState(false);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartRef.current = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };
    setSwipeHandled(false);
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (!touchStartRef.current || swipeHandled) {
      return;
    }

    const touchEnd = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };

    const horizontalDistance = touchEnd.x - touchStartRef.current.x;
    const verticalDistance = touchEnd.y - touchStartRef.current.y;

    // Calculate the absolute distance in each direction
    const absHorizontalDistance = Math.abs(horizontalDistance);
    const absVerticalDistance = Math.abs(verticalDistance);

    // Check if the vertical distance is greater than the horizontal distance
    if (absVerticalDistance > absHorizontalDistance) {
      // It's a scroll, not a swipe
      return;
    }

    const swipeDirection = horizontalDistance > 0 ? 'right' : 'left';

    // Handle the swipe direction
    if (swipeDirection === 'right') {
      previousProject();
    } else {
      nextProject();
    }

    setSwipeHandled(true);
  };

  const handleTouchEnd = () => {
    touchStartRef.current = null;
    setSwipeHandled(false);
  };

  return (
    <div id='projects-part'>
      <h2 className='dis-text projects-header'>Recent projects</h2>
      <div className='project-video-wrapper'>
        {!isDesktop && (
          <Flickity
            flickityRef={(el) => {
              flickityRef.current = el;
              slideChange();
            }}
            options={flickityOptions}
          >
            {projects.map((project) => {
              return (
                <video
                  autoPlay
                  muted
                  loop
                  controls
                  className='project-video'
                  onLoadedData={() => {
                    flickityRef.current?.resize();
                  }}
                  data-flickity-lazyload
                >
                  <source src={project.videoSRC} type='video/mp4' />
                </video>
                // <img className='project-video' src={TempVid} alt='' />
              );
            })}
          </Flickity>
        )}
        {isDesktop && (
          <Flickity
            flickityRef={(el) => {
              flickityRef.current = el;
              slideChange();
            }}
            options={flickityOptions}
          >
            {projects.map((project) => {
              return (
                <video
                  autoPlay
                  muted
                  loop
                  controls
                  className='project-video'
                  onLoadedData={() => {
                    flickityRef.current?.resize();
                  }}
                >
                  <source src={project.videoSRC} type='video/mp4' />
                </video>
                // <img className='project-video' src={TempVid} alt='' />
              );
            })}
          </Flickity>
        )}
      </div>
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {
          projects.map((project, index) => projectStructure(project, index))[
            project
          ]
        }
        {}
      </div>

      <div id='arrows'>
        <div className='arrow-left' onClick={previousProject}>
          {imports.arrowNext}
        </div>
        <div className='arrow-right' onClick={nextProject}>
          {imports.arrowNext}
        </div>
      </div>
      <div className='control-container'></div>
    </div>
  );
}
