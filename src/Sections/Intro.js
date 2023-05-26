import React from 'react';
import TEXTURE from '../Assets/TEXTURE.jpg';
import '../Styles/Intro.css';

function Intro() {
  return (
    <section className="home-section">
      <div className="main-content-div">
        <img
          className="main-content-background"
          src={TEXTURE}
          alt="Textura do fundo do site"
        />
        <div className="main-content-div-tittles">
          <h1>EMMANUEL BRUNNO</h1>
          <h3>
            DESENVOLVEDOR WEB FULL STACK
          </h3>
          <p>
            Crio sites e aplicativos modernos.
          </p>
        </div>
        <div className="main-button-div">
          <button type="button">
            DOWNLOAD CV
          </button>
        </div>
      </div>
      <div className="main-scrollicon-div">
        <div className="scrollicon-border">
          <div className="scrollicon-animation" />
        </div>
      </div>
    </section>
  );
}

export default Intro;
