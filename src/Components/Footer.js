import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';
import '../Styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-main-div">
        <div className="footer-tittle-div">
          <h2>
            EMMANUEL BRUNNO
          </h2>
          <span>
            Desenvolvedor de sites e aplicativos modernos, utilizando das ferramentas
            mais populares do mundo Javascript & Python.
          </span>
        </div>
        <div className="footer-social-div">
          <h2>SOCIAL</h2>
          <div>
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
              <li><FaInstagram /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright-div">
        <span>
          © Copyright 2023. Feito por
          <a
            href="https://github.com/EmmanuelBMS"
            target="_blank"
            rel="noreferrer"
          >
            EmmanuelBMS
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
