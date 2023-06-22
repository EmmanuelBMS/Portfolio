import React, { useRef, useEffect } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaDev, FaDesktop, FaLinkedin } from 'react-icons/fa';
import '../Styles/MobileNavBar.css';

function MobileNavBar() {
  const mobilenav = useRef();

  useEffect(() => {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollBottom = window.scrollY || document.documentElement.scrollBottom;
      if (scrollBottom < lastScroll) {
        mobilenav.current.style.bottom = '-88px';
      } else {
        mobilenav.current.style.bottom = '0';
      }
      lastScroll = scrollBottom;
    });
  });

  return (
    <div className="mobilenav-main-div" ref={mobilenav}>
      <div>
        <a href="#intro">
          <AiFillHome />
        </a>
      </div>
      <div>
        <a href="#about">
          <FaDev />
        </a>
      </div>
      <div>
        <a href="#projects">
          <FaDesktop />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/emmanuelbms/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default MobileNavBar;
