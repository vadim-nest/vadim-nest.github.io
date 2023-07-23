import '../css/theArrow.css';

export default function TheArrowDesktop() {
  return (
    <div id='wrap'>
      <svg
        id='svg-arrow'
        viewBox='0 0 1287 2414'
        fill='none'
        preserveAspectRatio='xMidYMax meet'
      >
        <defs>
            <use xlinkHref='#thePath' />
          <path
            id='thePath'
            d='M946.5 0.5C913.892 313.498 276 118.5 186 291.5C96.0009 464.5 194.001 549.5 318 518C442 486.5 403 323.212 355 280.5C307 237.788 181.5 256 146 343C110.5 430 150.216 516.313 247.5 637C344.784 757.687 666.99 633.566 722 718C743.5 751 740.5 784 731 848C697.582 1073.13'
            stroke='#FFCC00'
            strokeWidth='6'
          />
        </defs>
        <use
          id='maskedPath'
          xlinkHref='#thePath'
          strokeDasharray='12 8'
          mask='url(#mask1)'
        />
        <path
          id='arrowHead'
          className='cool arrowHead'
          d='M0,-15L0,-12L23,0L0,12L0,15'
          transform='translate(731, 850) rotate(90) scale(1.4)'
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
