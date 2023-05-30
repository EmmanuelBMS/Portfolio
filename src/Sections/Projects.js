import React from 'react';
import ProjectCards from '../Components/ProjectCards';
import '../Styles/Projects.css';

function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-section-title-div">
        <h2>PROJECTS</h2>
        <div className="projects-title-underline" />
        <h4>
          Aqui você vai encontrar um pouco do meu trabalho,
          projetos pessoais e profissionais.
        </h4>
      </div>
      <ProjectCards />
    </section>
  );
}

export default Projects;
