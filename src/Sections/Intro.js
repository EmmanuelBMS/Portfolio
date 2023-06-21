import React from 'react';
import Background from '../Assets/Background.jpg';
import '../Styles/Intro.css';
import curriculo from '../Assets/Curriculo.pdf';

function Intro() {
  return (
    <section id="intro" className="home-section">
      <div className="main-content-div">
        <img
          className="main-content-background"
          src={Background}
          alt="Textura do fundo do site"
        />
        <div className="main-content-div-tittles">
          <h1>EMMANUEL BRUNNO</h1>
          <h3>
            DESENVOLVEDOR WEB FULL STACK
          </h3>
          <p>
            Crio sites e aplicativos modernos,
            utilizando das ferramentas
            mais populares do mundo Javascript & Python.
            Adepto aos designs minimalistas,
            procuro tornar a internet um lugar mais simples e atraente através da ótica do usuário.
            <br />
            A final de contas menos é mais.
          </p>
        </div>
        <div className="main-button-div">
          <button type="button">
            <a href={curriculo} download="Curriculo">DOWNLOAD CV</a>
          </button>
        </div>
        <div className="main-scrollicon-div">
          <a href="#about">
            <div className="scrollicon-border">
              <div className="scrollicon-animation" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
