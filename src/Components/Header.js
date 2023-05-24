import React from 'react';
import '../Styles/Header.css';
import Foto from '../Assets/FOTO.png';

function Header() {
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
            <li>INICIO</li>
            <li>SOBRE</li>
            <li>PROJETOS</li>
            <li>CONTATO</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
