import '../css/theArrow.css';

export default function TheArrow() {
  return (
    <div id='wrap'>
      <svg
        viewBox='0 0 392 1900'
        fill='none'
        preserveAspectRatio='xMidYMax meet'
      >
        <defs>
            <use xlinkHref='#thePath' />
          <path
            id='thePath'
            d='M164.876 1C171.043 44.1667 143.139 77.3269 70.6388 108C-33.3612 152 9.13878 264 18.6388 353.5C24.4115 407.886 47.2145 492.854 132.814 534.054C239.814 585.554 319.217 442.842 244.639 343C200.901 284.446 45.9382 328.5 59.4382 474.5C70.2382 591.3 163.472 640.833 204.639 655C220.139 662 249.676 668.1 252.876 716.5C256.876 777 266.713 891.554 192.876'
            stroke='#FFCC00'
            strokeWidth='6'
          />
        </defs>
        <use
          id='maskedPath'
          xlinkHref='#thePath'
          strokeDasharray='10 6'
          mask='url(#mask1)'
        />
        <path
          className='arrowHead'
          d='M0,-15L0,-12L23,0L0,12L0,15'
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
