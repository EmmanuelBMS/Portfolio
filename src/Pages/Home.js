import React from 'react';
import Header from '../Components/Header';
import '../Styles/Home.css';
import TEXTURE from '../Assets/TEXTURE.jpg';
import LinksMenu from '../Components/LinksMenu';

function Home() {
  return (
    <div>
      <Header />
      <section>
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
      <LinksMenu />
    </div>
  );
}

export default Home;
