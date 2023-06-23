import React from 'react';
import ProjectCards from '../Components/ProjectCards';
import '../Styles/Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-section-title-div">
        <h2>PROJETOS</h2>
        <div className="projects-title-underline" />
        <h4>
          Este espaço uso para compartilhar
          projetos que estou trabalhando, e alguns que já finalizei.
        </h4>
      </div>
      <ProjectCards />
    </section>
  );
}

export default Projects;
