import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import '../Styles/LinksMenu.css';

function LinksMenu() {
  return (
    <nav>
      <div className="linksmenu-main-div">
        <ul>
          <li>
            <a
              href="https://github.com/EmmanuelBMS"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/emmanuelbms/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCFx-0Io3-TOHVuR8ZThiU0w"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default LinksMenu;
