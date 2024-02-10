import React, { useContext } from 'react';
import { LoaderContext } from '../../context/LoaderContext';
import { Loader } from '../../components';

import MotorQ from './components/Motrq/Motorq';
import TMB from './components/TMB/TMB';
import Header from './components/Header/Header';

function Sponsor() {
  const { isLoading } = useContext(LoaderContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className='bg-[#34363e]'>
      <Header />
      <MotorQ />
      <TMB />
    </div>
  )
}

export default Sponsor;