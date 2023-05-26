import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';
import '../Styles/LinksMenu.css';

function LinksMenu() {
  return (
    <nav>
      <div className="linksmenu-main-div">
        <ul>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li><FaLinkedin /></li>
          <li><FaYoutube /></li>
          <li><FaInstagram /></li>
        </ul>
      </div>
    </nav>
  );
}

export default LinksMenu;
