import '../css/theArrow.css';
import React, { useEffect } from 'react';

export default function TheArrow() {
  function getAngle(offset) {
    const delta = 1; // A small value to calculate the tangent
    const point1 = thePath.getPointAtLength(offset);
    const point2 = thePath.getPointAtLength(offset + delta);
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    return angle;
  }

  function updateArrowPosition(dashoffset) {
    const offset = thePath.getTotalLength() - dashoffset;
    const arrowPosition = thePath.getPointAtLength(offset);
    let angle;

    // If the dashoffset is between 210 and 810, set the angle to 90 degrees
    angle = getAngle(offset);

    if (dashoffset > 300 && dashoffset < 810) angle = 0;
    if (dashoffset < 20) angle = 180;

    const arrowHead = document.getElementById('arrowHead');

    // Adjust these values to align the arrowhead with the path
    let arrowHeadOffsetX = 1.5;
    const arrowHeadOffsetY = -3;

    if (dashoffset < 10) {
      arrowHeadOffsetX += 10; // Adjust this value to shift the arrow to the right
    } else {
      arrowHeadOffsetX = 1.5;
    }

    arrowHead.setAttribute(
      'transform',
      `translate(${arrowPosition.x + arrowHeadOffsetX},${
        arrowPosition.y + arrowHeadOffsetY
      }) rotate(${angle})`
    );
    arrowHead.style.visibility = 'visible';
  }

  useEffect(() => {
    const thePath = document.getElementById('thePath');
    const mask = document.getElementById('mask');

    const l = thePath.getTotalLength();
    const dasharray = l;
    mask.style.strokeDasharray = dasharray;
    let dashoffset = l - 1600;
    mask.style.strokeDashoffset = dashoffset;

    updateArrowPosition(dashoffset);

    const lengthAbout = 1620;
    const lengthProjects = 410;

    ///
    window.addEventListener('scroll', function () {
      const wrap = document.getElementById('wrap');
      const totalScrollableHeight = wrap.scrollHeight - wrap.clientHeight;
      dashoffset = l - (window.scrollY * l) / totalScrollableHeight;

      if (dashoffset > lengthAbout) dashoffset = lengthAbout;
      if (dashoffset < lengthAbout && dashoffset > 810) dashoffset = dashoffset;
      if (dashoffset > 210 && dashoffset < 810) dashoffset = lengthProjects;
      if (dashoffset < 210) dashoffset = dashoffset + 200;

      if (dashoffset < 10) {
        document.querySelector('.light-big').style.visibility = 'visible';
        document.querySelector('.light-small').style.visibility = 'visible';
      } else {
        document.querySelector('.light-big').style.visibility = 'hidden';
        document.querySelector('.light-small').style.visibility = 'hidden';
      }

      mask.style.strokeDashoffset = dashoffset;
      console.log(dashoffset);
      updateArrowPosition(dashoffset);
    });
  }, []);

  return (
    <div id='wrap'>
      <svg
        id='svg'
        viewBox='0 0 370 1900'
        fill='none'
        preserveAspectRatio='xMidYMax meet'
      >
        <defs>
          <mask id='mask1'>
            <use id='mask' xlinkHref='#thePath' />
          </mask>
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
        </defs>
        <use
          id='maskedPath'
          xlinkHref='#thePath'
          strokeDasharray='8 6'
          mask='url(#mask1)'
        />
        <path
          id='arrowHead'
          className='cool arrowHead'
          d='M0,-15L0,-12L23,0L0,12L0,15'
          visibility='hidden'
        />
      </svg>
    </div>
  );
}
