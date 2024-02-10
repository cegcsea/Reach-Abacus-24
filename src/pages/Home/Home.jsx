import React, { useContext } from 'react';
import { LoaderContext } from '../../context/LoaderContext';
import { Loader } from '../../components';

import Sponsors from './components/Sponsors/Sponsors';
import Hero from './components/Hero/Hero';
import Developers from './components/Developers/Developer';
import Abacus24 from './components/Abacus/Abacus24';
import { useMediaQuery } from 'react-responsive';

function Home() {
  const { isLoading } = useContext(LoaderContext);
  const isMobileLayout = useMediaQuery({ query: "(max-width: 768px)" });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className='bg-[#34363e]'>
      <Hero />
      <Abacus24 />
      <Sponsors />
      <Developers isMobile={isMobileLayout} />
    </div>
  )
}

export default Home;