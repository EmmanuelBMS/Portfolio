import React from 'react';
import '../Styles/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-section-title-div">
        <h2>SOBRE</h2>
        <div className="about-title-underline" />
        <h4>
          Aqui você vai conhecer um pouco mais sobre mim,
          minhas habilidades e um pouco da minha história.
        </h4>
      </div>
      <div className="about-section-content-div">
        <div className="about-section-about-content">
          <h3>Minha história</h3>
          <p>
            Lore ipsum Lore ipsum Lore ipsum Lore ipsum
            Lore ipsum Lore ipsum Lore ipsum Lore ipsum
            Lore ipsum Lore ipsum Lore ipsum Lore ipsum
            Lore ipsum Lore ipsum Lore ipsum Lore ipsum
            Lore ipsum Lore ipsum Lore ipsum Lore ipsum
            Lore ipsum Lore ipsum Lore ipsum Lore ipsum
            Lore ipsum Lore ipsum Lore ipsum Lore ipsum
            Lore ipsum Lore ipsum Lore ipsum Lore ipsum
            Lore ipsum Lore ipsum Lore ipsum Lore ipsum
          </p>
        </div>
        <div>
          <h3>Habilidades</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>MySQL</li>
            <li>Git & Github</li>
            <li>Docker</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>Typescript</li>
            <li>POO</li>
            <li>MongoDB</li>
            <li>Agile</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
