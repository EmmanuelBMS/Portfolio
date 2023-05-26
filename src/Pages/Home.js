import React from 'react';
import Header from '../Components/Header';
import LinksMenu from '../Components/LinksMenu';
import Intro from '../Sections/Intro';
import About from '../Sections/About';

function Home() {
  return (
    <div>
      <Header />
      <LinksMenu />
      <Intro />
      <About />
    </div>
  );
}

export default Home;
