import '../css/theArrow.css';
import React, { useEffect, useRef } from 'react';

export default function TheArrowDesktop() {
  const pathRef = useRef(null);
  const maskRef = useRef(null);
  const wrapRef = useRef(null);
  const arrowHeadRef = useRef(null);

  let vh = window.innerHeight;
  const projectsPos = vh;

  const handleNavClick = () => {
    console.log('click');
    window.scrollTo({
      top: projectsPos - vh * 0.3,
      behavior: 'smooth',
    });
  };

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
        const lengthAbout = 3950;
        const lengthProjects = 1700;

        // let arrowRightElement = document.querySelector(
        //   '.arrow-right .arrow-next-color'
        // );
        let lightBigElement = document.querySelector('.light-big');
        let lightSmallElement = document.querySelector('.light-small');

        if (dashoffset > lengthAbout) {
          dashoffset = lengthAbout;
        } else if (dashoffset > 400 && dashoffset < 2300) {
          dashoffset = lengthProjects;
        } else if (dashoffset < 400) {
          dashoffset += 1000;
        }

        if (dashoffset < 0) dashoffset = 0;

        // dashoffset = lengthProjects;

        // if (arrowRightElement) {
        //   if (dashoffset === lengthProjects) {
        //     arrowRightElement.style.fill = 'var(--yellow-main)';
        //     arrowRightElement.style.fillOpacity = '1';
        //   } else {
        //     arrowRightElement.style.fill = 'var(--light-gray)';
        //   }
        // }

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
        viewBox='0 0 1287 2414'
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
            d='M947.5 0.5C914.892 313.498 277 118.5 187 291.5C97.0009 464.5 195.001 549.5 319 518C443 486.5 404 323.212 356 280.5C308 237.788 182.5 256 147 343C111.5 430 151.216 516.313 248.5 637C345.784 757.687 657.012 629.226 723 718C788.988 806.774 754.5 1287 586.5 1330.5C287.341 1407.96 215.5 1462.5 215.5 1592.5C215.5 1722.5 215.5 1849 215.5 1864C215.5 1879 220.5 1879 234 1879C247.501 1879 921.002 1879 1148.5 1879C1376 1879 1263.5 2085 1192 2248C1120.5 2411 331 2411 331 2411H0'
            stroke='#FFCC00'
            strokeWidth='6'
            // markerEnd='url(#arrow)'
          />
        </defs>
        <use
          id='maskedPath'
          xlinkHref='#thePath'
          strokeDasharray='12 8'
          mask='url(#mask1)'
          // strokeLinecap="round"
        />
        <path
          id='arrowHead'
          ref={arrowHeadRef}
          className='cool arrowHead'
          d='M0,-15L0,-12L23,0L0,12L0,15'
          // visibility='hidden'
          transform='translate(754, 850) rotate(90) scale(1.4)'
          onClick={() => handleNavClick()}
        />
      </svg>
    </div>
  );
}
