import React from 'react';
import Sponsors from './components/Sponsors/Sponsors';
import Hero from './components/Hero/Hero';
import Developers from './components/Developers/Developer'

function Home() {
  return (
    <div>
      <Hero />
      <Sponsors />
      <Developers />
    </div>
  )
}

export default Home;