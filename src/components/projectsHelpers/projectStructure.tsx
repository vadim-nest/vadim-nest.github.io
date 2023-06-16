import imports from './imports';
import { Project } from '../../types/myTypes';
import Carousel from './carousel';
import { useMediaQuery } from 'react-responsive';

function computeClass(index: number, classes: string[]): string {
  return classes[index % classes.length];
}

function projectLinks(links: object) {
  return Object.entries(links).map(([linkName, link]) => {
    let theLink;

    if (linkName === 'github') theLink = <imports.GithubIcon />;
    if (linkName === 'website') theLink = <imports.ExternalLinkIcon />;

    return (
      <div className={`${linkName}-div`}>
        <a href={link} target='_blank'>
          {theLink}
        </a>
      </div>
    );
  });
}

function projectStructure(project: Project, key: number) {
  const isDesktop = useMediaQuery({ minWidth: 901 });
  const frontClasses = ['bubble-white', 'bubble-black', 'bubble-yellow'];
  const backClasses = ['bubble-yellow', 'bubble-white', 'bubble-black'];

  return (
    <div className='project-description' key={key}>
      {isDesktop && (
        <div className='stack-bigscreen animate__animated animate__fadeInDown'>
          {project.frontStack.map((stack: string, index: number) => (
            <div className={`bubble ${computeClass(index, frontClasses)}`}>
              <img className='bubble-img' src={imports.logoMap[stack]} />
              <p>{stack}</p>
            </div>
          ))}
          {project.backStack.map((stack: string, index: number) => (
            <div className={`bubble ${computeClass(index, backClasses)}`}>
              <img className='bubble-img' src={imports.logoMap[stack]} />
              <p>{stack}</p>
            </div>
          ))}
        </div>
      )}
      <div className='project-info'>
        <h1 className='h-e-text animate__animated animate__fadeInDown'>
          {project.name}
        </h1>
        <p className='description animate__animated animate__fadeInDown'>
          {project.description}
        </p>
        {isDesktop && (
          <div className='links animate__animated animate__fadeInDown'>
            {projectLinks(project.links)}
          </div>
        )}
      </div>
      <div id='all-stack' className='animate__animated animate__fadeInDown'>
        {!isDesktop && (
          <>
            <div id='front-stack' className='stack'>
              <Carousel>
                {project.frontStack.map((stack: string, index: number) => (
                  <div
                    className={`bubble ${computeClass(index, frontClasses)}`}
                  >
                    <img className='bubble-img' src={imports.logoMap[stack]} />
                    <p>{stack}</p>
                  </div>
                ))}
              </Carousel>
            </div>

            <div id='back-stack' className='stack'>
              <Carousel speed={'slow'}>
                {project.backStack.map((stack: string, index: number) => (
                  <div className={`bubble ${computeClass(index, backClasses)}`}>
                    <img className='bubble-img' src={imports.logoMap[stack]} />
                    <p>{stack}</p>
                  </div>
                ))}
              </Carousel>
            </div>

            <img className='gradient-left' src={imports.gradient} />
            <img className='gradient-right' src={imports.gradient} />
            <div className='links animate__animated animate__fadeInDown'>
              {projectLinks(project.links)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default projectStructure;
