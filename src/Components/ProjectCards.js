import React from 'react';
import projectsData from '../Data/ProjectsData';
import '../Styles/ProjectCards.css';
import Carousel from './Carousel';

function ProjectCards() {
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
              <p>{project.desc}</p>
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
