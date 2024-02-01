import React, { useEffect, useContext, Suspense } from 'react';
import { NavBar, Footer, Loader } from './components';
import { LoaderContext } from './context/LoaderContext';

import AllRoutes from './routes/AllRoutes';

export const App = () => {
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <NavBar />
      <div className='px-[1.5rem] sm:px-[4rem]'>
        <AllRoutes />
      </div>
      <Footer />
    </Suspense>
  )
}

export default App;