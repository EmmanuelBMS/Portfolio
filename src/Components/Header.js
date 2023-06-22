import React from 'react';
import '../Styles/Header.css';
import Foto from '../Assets/FOTO.png';

function Header() {
  return (
    <header>
      <div className="header-main-div">
        <div className="header-tittle-div">
          <a href="#intro">
            <img
              src={Foto}
              alt="minha foto"
              className="header-tittle-photo"
            />
          </a>
          <a href="#intro">
            <span>
              EMMANUELBMS
            </span>
          </a>
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
