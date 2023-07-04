import React from 'react';
import projectsData from '../Data/ProjectsData';
import '../Styles/ProjectCards.css';

function ProjectCards() {
  return (
    <div className="projectcards-main-div">
      {projectsData.map((project) => {
        const {
          image, id, tittle, desc,
        } = project;
        return (
          <div key={id} className="projectcard-main-div">
            <div className="projectcard-image-div">
              <img src={image} alt={tittle} />
            </div>
            <div className="project-infos-main-div">
              <h2>{tittle}</h2>
              <p draggable="false">{desc}</p>
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
