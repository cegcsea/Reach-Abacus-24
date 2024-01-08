import React from 'react';

import Sponsors from './components/Sponsors/Sponsors';
import Hero from './components/Hero/Hero';
import Developers from './components/Developers/Developer';
import Abacus24 from './components/Abacus/Abacus24';
import Footer from './components/Footer/Footer';

function Home() {
  return (
    <div>
      <Hero />
      <Abacus24 />
      <Sponsors />
      <Developers />
      <Footer />
    </div>
  )
}

export default Home;