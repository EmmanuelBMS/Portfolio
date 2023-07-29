import React from 'react';
import { motion } from 'framer-motion';
import Background from '../Assets/Background.jpg';
import '../Styles/Intro.css';
import curriculo from '../Assets/Curriculo.pdf';
import Meu from '../Assets/Meu.png';

function Intro() {
  return (
    <section id="intro" className="home-section">
      <div className="main-content-div">
        <img
          className="main-content-background"
          src={Background}
          alt="Textura do fundo do site"
        />
        <div className="main-content-div-tittles">
          <div className="main-content-div-tittles-img">
            <div className="main-content-tittles">
              <motion.h1
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                EMMANUEL BRUNNO
              </motion.h1>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ x: [-300, 150, 0], opacity: 1 }}
                transition={{ duration: 2 }}
              >
                DESENVOLVEDOR WEB FULL STACK
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ x: [400, -150, 0], opacity: 1 }}
                transition={{ duration: 2 }}
              >
                Crio sites e aplicativos modernos,
                utilizando das ferramentas
                mais populares do mundo Javascript & Python.
                Adepto aos designs minimalistas,
                procuro tornar a internet um lugar mais
                simples e atraente através da ótica do usuário.
                <br />
                <b>A final de contas menos é mais.</b>
              </motion.p>
            </div>
            <motion.div
              className="main-content-img"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', duration: 1 }}
              whileHover={{
                backgroundColor: '#42bfdd',
                scale: 1.1,
              }}
            >
              <img src={Meu} alt="foto minha de perfil" />
            </motion.div>
          </div>
        </div>
        <div
          className="main-button-div"
        >
          <button type="button">
            <a href={curriculo} download="Curriculo">CURRÍCULO</a>
          </button>
        </div>
        <div className="main-scrollicon-div">
          <a href="#about">
            <div className="scrollicon-border">
              <div className="scrollicon-animation" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
