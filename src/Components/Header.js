// import React, { useState, useEffect } from 'react';
import React from 'react';
import '../Styles/Header.css';
import Foto from '../Assets/FOTO.png';

function Header() {
  // const [screenWidth, setscreenWidth] = useState(0);

  // function handleResize() {
  //   useEffect(() => {
  //     function updatescreenWidth() {
  //       setscreenWidth(window.innerWidth);
  //     }
  //     window.addEventListener('resize', updatescreenWidth);
  //     updatescreenWidth();
  //     return () => window.removeEventListener('resize', updatescreenWidth);
  //   }, []);
  // }

  return (
    <header>
      <div className="header-main-div">
        <div className="header-tittle-div">
          <img
            src={Foto}
            alt="minha foto"
            className="header-tittle-photo"
          />
          <span>
            EMMANUELBMS
          </span>
        </div>
        <div className="header-links-div">
          <ul>
            <li>
              <a href="#intro">
                INICIO
              </a>
            </li>
            <li>
              <a href="#about">
                SOBRE
              </a>
            </li>
            <li>
              <a href="#projects">
                PROJETOS
              </a>
            </li>
            <li>
              <a href="#contact">
                CONTATO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
