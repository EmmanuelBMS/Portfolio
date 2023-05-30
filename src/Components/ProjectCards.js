import React from 'react';
import projectsData from '../Data/ProjectsData';
import '../Styles/ProjectCards.css';

function ProjectCards() {
  return (
    <div className="projectcards-main-div">
      {projectsData.map((project) => {
        const { Example } = project.image_src;
        return (
          <div key={project.id} className="projectcard-main-div">
            <div className="project-img-div">
              <img
                src={Example}
                alt={`imagem do projeto: ${project.tittle}`}
                className="project-img"
              />
            </div>
            <div className="project-infos-main-div">
              <h2>{project.tittle}</h2>
              <p>{project.description}</p>
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
