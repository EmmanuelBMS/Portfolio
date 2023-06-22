import React from 'react';
import Header from '../Components/Header';
import LinksMenu from '../Components/LinksMenu';
import Intro from '../Sections/Intro';
import About from '../Sections/About';
import Projects from '../Sections/Projects';
import Contact from '../Sections/Contact';
import Footer from '../Components/Footer';
import MobileNavBar from '../Components/MobileNavBar';

function Home() {
  return (
    <div>
      <Header />
      <LinksMenu />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <MobileNavBar />
      <Footer />
    </div>
  );
}

export default Home;
