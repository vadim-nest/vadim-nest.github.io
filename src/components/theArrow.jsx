import '../css/theArrow.css';
import React, { useEffect } from 'react';
import arrowSVG from '../svg_arrow.svg';

export default function TheArrow() {
  useEffect(() => {
    var l = thePath.getTotalLength();
    var dasharray = l;
    mask.style.strokeDasharray = dasharray;
    var dashoffset = l;
    mask.style.strokeDashoffset = dashoffset;
    // console.log('hello');
    window.addEventListener('scroll', function () {
      // console.log(window.scrollY);
      dashoffset =
        l -
        (window.scrollY * l) / (wrap.scrollHeight - wrap.clientHeight) -
        300;
      // console.log(dashoffset);
      mask.style.strokeDashoffset = dashoffset;
      // console.log(document.querySelector('.arrowHead').getBoundingClientRect());
    });
  }, [window.onscroll]);

  return (
    <div id='wrap'>
      <svg
        id='svg'
        viewBox='0 0 370 1856'
        fill='none'
        preserveAspectRatio='xMidYMax meet'
      >
        <defs>
          <marker
            id='arrow'
            viewBox='-10 -5 10 10'
            refX='5'
            refY='0'
            markerWidth='4'
            markerHeight='4'
            orient='auto'
          >
            <path className='cool arrowHead' d='M0,-5L10,0L0,5'></path>
          </marker>
        </defs>
        <defs>
          <path
            id='thePath'
            d='M164.876 1C171.043 44.1667 143.139 77.3269 70.6388 108C-33.3612 152 9.13878 264 18.6388 353.5C24.4115 407.886 47.2145 492.854 132.814 534.054C239.814 585.554 319.217 442.842 244.639 343C200.901 284.446 45.9382 328.5 59.4382 474.5C70.2382 591.3 163.472 640.833 204.639 655C220.139 662 249.676 668.1 252.876 716.5C256.876 777 266.713 891.554 192.876
          932.5C172.139 944 38.8763 992 38.8763 1141.5C38.8763 1261.1 38.8763 1455
          38.8763
          1537C38.8763 1540 43.4388 1544 50.6388 1544C57.8388 1544 178.876 1544 238.876 1544C254.376 1543.5 285.376 1547.5 285.376 1559.5C285.376 1574.5 290.876 1596 336.876 1596C382.876 1596 338.133 1641.82 353.876 1709C383.639 1836 371.639 1853.26 230.139 1853.26'
            stroke='#FFCC00'
            strokeWidth='6'
            // markerEnd='url(#arrow)'
          />

          <mask id='mask1'>
            <use id='mask' xlinkHref='#thePath' />
          </mask>
        </defs>
        <use
          xlinkHref='#thePath'
          strokeDasharray='8 6'
          stroke='black'
          mask='url(#mask1)'
          // markerEnd="url(#arrow)"
        />
      </svg>
      {/* <img src={arrowSVG}/> */}
    </div>
  );
}
