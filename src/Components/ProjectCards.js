import React, { useRef, useEffect } from 'react';
import projectsData from '../Data/ProjectsData';
import '../Styles/ProjectCards.css';
import Carousel from './Carousel';

function ProjectCards() {
  const description = useRef();

  // scroll text p
  useEffect(() => {
    let isDown = false;
    let startY;
    let scrollDown;

    description.current.addEventListener('mousedown', (e) => {
      isDown = true;
      startY = e.pageY - description.current.offsetTop;
      scrollDown = description.current.scrollDown;
    });
    description.current.addEventListener('mouseleave', () => {
      isDown = false;
    });
    description.current.addEventListener('mouseup', () => {
      isDown = false;
    });
    description.current.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const y = e.pageY - description.current.offsetTop;
      const walk = (y - startY) * 1;
      description.current.scrollLeft = scrollDown - walk;
    });
  }, []);

  return (
    <div className="projectcards-main-div">
      {projectsData.map((project) => {
        const { images } = project;
        return (
          <div key={project.id} className="projectcard-main-div">
            <div className="project-img-div">
              <Carousel images={images} />
            </div>
            <div className="project-infos-main-div">
              <h2>{project.tittle}</h2>
              <p ref={description}>{project.desc}</p>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
              >
                PROJETO
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectCards;
