import React from 'react';
import Header from '../Components/Header';
import LinksMenu from '../Components/LinksMenu';
import Intro from '../Sections/Intro';

function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <LinksMenu />
    </div>
  );
}

export default Home;
