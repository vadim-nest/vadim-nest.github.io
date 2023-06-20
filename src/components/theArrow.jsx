import '../css/theArrow.css';
import React, { useEffect, useRef } from 'react';

export default function TheArrow() {
  const pathRef = useRef(null);
  const maskRef = useRef(null);
  const wrapRef = useRef(null);
  const arrowHeadRef = useRef(null);

  // let vh = window.innerHeight;
  // const projectsPos = vh;

  // const handleNavClick = () => {
  //   console.log('click');
  //   window.scrollTo({
  //     top: projectsPos - vh * 0.07,
  //     behavior: 'smooth',
  //   });
  // };

  useEffect(() => {
    const handleScroll = () => {
      if (pathRef.current && maskRef.current && wrapRef.current) {
        const thePath = pathRef.current;
        const mask = maskRef.current;
        const wrap = wrapRef.current;

        const l = thePath.getTotalLength();
        const dasharray = l;
        mask.style.strokeDasharray = dasharray;
        mask.style.strokeDashoffset = dasharray;

        const totalScrollableHeight = wrap.scrollHeight - wrap.clientHeight;
        let dashoffset = l - (window.scrollY * l) / totalScrollableHeight;

        // update dashoffset based on different conditions
        const lengthAbout = 1620;
        const lengthProjects = 410;

        let arrowRightElement = document.querySelector(
          '.arrow-right .arrow-next-color'
        );
        let lightBigElement = document.querySelector('.light-big');
        let lightSmallElement = document.querySelector('.light-small');
        dashoffset = lengthAbout;
        // if (dashoffset > lengthAbout) dashoffset = lengthAbout;
        // else if (dashoffset > 210 && dashoffset < 810)
        //   dashoffset = lengthProjects;
        // else if (dashoffset < 210) dashoffset += 200;

        // if (dashoffset < 0) dashoffset = 0;

        if (arrowRightElement) {
          if (dashoffset === lengthProjects) {
            arrowRightElement.style.fill = 'var(--yellow-main)';
            arrowRightElement.style.fillOpacity = '1';
          } else {
            arrowRightElement.style.fill = 'var(--light-gray)';
          }
        }

        if (lightBigElement && lightSmallElement) {
          if (dashoffset < 10) {
            lightBigElement.style.visibility = 'visible';
            lightSmallElement.style.visibility = 'visible';
          } else {
            lightBigElement.style.visibility = 'hidden';
            lightSmallElement.style.visibility = 'hidden';
          }
        }

        if (arrowHeadRef.current) {
          arrowHeadRef.current.style.opacity =
            dashoffset === lengthAbout ? '1' : '0';
        }

        mask.style.strokeDashoffset = dashoffset;
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='wrap' ref={wrapRef}>
      <svg
        id='svg-arrow'
        viewBox='0 0 392 1900'
        fill='none'
        preserveAspectRatio='xMidYMax meet'
      >
        <defs>
          <mask id='mask1'>
            <use ref={maskRef} xlinkHref='#thePath' />
          </mask>
          <path
            id='thePath'
            ref={pathRef}
            d='M164.876 1C171.043 44.1667 143.139 77.3269 70.6388 108C-33.3612 152 9.13878 264 18.6388 353.5C24.4115 407.886 47.2145 492.854 132.814 534.054C239.814 585.554 319.217 442.842 244.639 343C200.901 284.446 45.9382 328.5 59.4382 474.5C70.2382 591.3 163.472 640.833 204.639 655C220.139 662 249.676 668.1 252.876 716.5C256.876 777 266.713 891.554 192.876
          932.5C172.139 944 38.8763 992 38.8763 1141.5C38.8763 1261.1 38.8763 1455
          38.8763
          1537C38.8763 1540 43.4388 1544 50.6388 1544C57.8388 1544 178.876 1544 238.876 1544C254.376 1543.5 285.376 1547.5 285.376 1559.5C285.376 1574.5 290.876 1596 336.876 1596C382.876 1596 338.133 1641.82 353.876 1709C383.639 1836 371.639 1853.26 230.139 1853.26'
            stroke='#FFCC00'
            strokeWidth='6'
            // markerEnd='url(#arrow)'
          />
        </defs>
        <use
          id='maskedPath'
          xlinkHref='#thePath'
          strokeDasharray='10 6'
          mask='url(#mask1)'
          // strokeLinecap="round"
        />
        <path
          id='arrowHead'
          ref={arrowHeadRef}
          className='cool arrowHead'
          d='M0,-15L0,-12L23,0L0,12L0,15'
          // visibility='hidden'
          transform='translate(254, 713) rotate(90)'
          onClick={() =>
            document
              .getElementById('projects-part')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        />
      </svg>
    </div>
  );
}
