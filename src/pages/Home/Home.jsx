import React, { useContext } from 'react';
import { LoaderContext } from '../../context/LoaderContext';
import { Loader } from '../../components';

import Sponsors from './components/Sponsors/Sponsors';
import Hero from './components/Hero/Hero';
import Developers from './components/Developers/Developer';
import Abacus24 from './components/Abacus/Abacus24';

function Home() {
  const { isLoading } = useContext(LoaderContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className='bg-[#34363e]'>
      <Hero />
      <Abacus24 />
      <Sponsors />
      <Developers />
    </div>
  )
}

export default Home;