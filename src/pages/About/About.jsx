import React, { useContext } from 'react';
import { LoaderContext } from '../../context/LoaderContext';
import { Loader } from '../../components';

import Abacus24 from './components/Abacus/Abacus';
import CSEA from './components/CSEA/CSEA';
import Ceg from './components/Ceg/Ceg';
import Header from './components/Header/Header';

function About() {
  const { isLoading } = useContext(LoaderContext);

  if (isLoading) {
    return <Loader />;
  }

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