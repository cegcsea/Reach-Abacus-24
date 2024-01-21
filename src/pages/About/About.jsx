import React from 'react';
import Abacus24 from './components/Abacus/Abacus';
import CSEA from './components/CSEA/CSEA';
import Ceg from './components/Ceg/Ceg';
import Header from './components/Header/Header';

function About() {
  return (
    <div className='bg-[#34363e]'>
        <Header />
        <Abacus24 />
        <Ceg />
        <CSEA />
    </div>
  )
}

export default About;