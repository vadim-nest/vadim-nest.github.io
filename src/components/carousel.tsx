import React, { useState, useEffect, ReactNode } from 'react';
import '../css/carousel.css';

interface CarouselProps {
  children: ReactNode[];
  speed?: string;
}

const Carousel = ({ children, speed }: CarouselProps) => {
  const [animationClassName, setAnimationClassName] = useState('');

  useEffect(() => {
    setAnimationClassName('scrolling');
  }, []);

  let animationSpeedClass = '';
  if (speed === 'slow') {
    animationSpeedClass = 'moving-slower';
  }

  return (
    <div className='carousel'>
    <div className={`carousel-moving-container ${animationClassName} ${animationSpeedClass}`} >
      {[...Array(10)].flatMap((_, i) =>
        children.map((child, index) => (
          <div className='carousel-item' key={index + i * children.length}>
            {child}
          </div>
        ))
      )}
    </div>
  </div>
  );
};

export default Carousel;
