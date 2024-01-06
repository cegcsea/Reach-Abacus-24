import React from 'react';
import Sponsors from './components/Sponsors/Sponsors';
import Hero from './components/Hero/Hero';
import Developers from './components/Developers/Developer';
import Abacus24 from './components/Abacus/Abacus24';

function Home() {
  return (
    <div>
      <Hero />
      <Abacus24 />
      <Sponsors />
      <Developers />
    </div>
  )
}

export default Home;