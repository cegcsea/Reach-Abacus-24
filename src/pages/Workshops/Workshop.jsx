import React, { useContext } from 'react';
import { LoaderContext } from '../../context/LoaderContext';
import { Loader } from '../../components';
import Header from './component/Heading';
import Content from './component/Content';

function Workshop() {
  const { isLoading } = useContext(LoaderContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#34363e] p-3">
      <Header />
      <Content />
    </div>
  )
}

export default Workshop;