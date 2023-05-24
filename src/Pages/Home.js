import React from 'react';
import Header from '../Components/Header';
import '../Styles/Home.css';

function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="main-content-div">
          <div className="main-content-div-tittles">
            <h3>Olá, sou o</h3>
            <h1>Emmanuel Brunno</h1>
            <h3>
              Desenvolvedor Web
              <span className="span-h3-text-color-highlight"> FullStack</span>
            </h3>
            <p>
              Lore ipsum  Lore ipsum  Lore ipsum  Lore ipsum  Lore ipsum  Lore ipsum
              Lore ipsum  Lore ipsum  Lore ipsum  Lore ipsum  Lore ipsum  Lore ipsum
              Lore ipsum  Lore ipsum  Lore ipsum  Lore ipsum  Lore ipsum  Lore ipsum
              Lore ipsum  Lore ipsum  Lore ipsum  Lore ipsum  Lore ipsum  Lore ipsum
              Lore ipsum  Lore ipsum  Lore ipsum  Lore ipsum  Lore ipsum  Lore ipsum
            </p>
          </div>
          <div>
            <button type="button">
              Currículo
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
