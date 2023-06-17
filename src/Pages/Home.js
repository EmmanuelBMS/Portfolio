import React from 'react';
import Header from '../Components/Header';
import LinksMenu from '../Components/LinksMenu';
import Intro from '../Sections/Intro';
import About from '../Sections/About';
import Projects from '../Sections/Projects';
import Contact from '../Sections/Contact';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <nav>
        <LinksMenu />
      </nav>
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
