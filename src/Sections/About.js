import React, { useRef, useState } from 'react';
import '../Styles/About.css';
import Carousel from '../Components/Carousel';
import photosData from '../Data/PhotosData';

function About() {
  const [expanded, setExpanded] = useState(true);
  const myText = useRef();

  const handleText = () => {
    if (myText.current.style.height !== 'fit-content') {
      myText.current.style.height = 'fit-content';
      setExpanded(false);
    } else {
      myText.current.style.height = '300px';
      setExpanded(true);
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-section-title-div">
        <h2>SOBRE</h2>
        <div className="about-title-underline" />
        <h4>
          Aqui você vai conhecer um pouco mais sobre mim,
          minhas habilidades e um pouco da minha história.
        </h4>
      </div>
      <div className="about-section-content-div">
        <div className="about-section-about-content">
          <h3>Minha história</h3>
          <p ref={myText}>
            Meu nome é Emmanuel Brunno, tenho 27 anos, casado com uma linda esposa e juntos
            temos uma cadela muito pipoca chamada Eevee,
            São Paulo-SP, mas sou natural de Aracaju-SE e morei 4 anos na cidade de Juazeiro-BA.
            <br />
            Conheci tecnologia através de jogos, que por sinal é meu hobby desde os anos 2000.
            Iniciei os estudos na área de tecnologia pela paixão por jogos, comecei com C# + Unity
            em meados de 2019
            e tornar meu hobby desenvolver jogos e não só jogá-los. Foi então que
            conheci a Escola de programação&nbsp;
            <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe</a>
            &nbsp;
            onde durante 1 ano e 3 meses me especializei em Reactjs, Nodejs e Python e pude assim
            me profissionalizar na área de desenvolvimento de software.
          </p>
          <button type="button" onClick={handleText}>{ expanded ? 'ver mais' : 'ver menos' }</button>
        </div>
        <div className="about-section-images-div">
          <Carousel images={photosData} />
        </div>
        <div className="about-section-skills-div">
          <h3>Habilidades</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>MySQL</li>
            <li>Git & Github</li>
            <li>Docker</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>Typescript</li>
            <li>POO</li>
            <li>MongoDB</li>
            <li>Agile</li>
            <li>Python</li>
            <li>Django</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
