import React, { useEffect, useContext, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar, Footer, ScrollToTop, Loader } from './components';
import {
  Home, Events, SingleEvent,
  Workshop, Login, SignUpDetails,
  About, ForgotPassWord, Profile,
  SingleWorkshop, ForgotPassWordDetails
} from './pages';

import { LoaderContext } from './context/LoaderContext';

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
      <ScrollToTop />
      <NavBar />
      <div className='px-[1.5rem] sm:px-[4rem]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/workshops' element={<Workshop />} />
          <Route path='/workshops/:id' element={<SingleWorkshop />} />
          <Route path='/events' element={<Events />} />
          <Route path='/events/:id' element={<SingleEvent />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register/:email/:token' element={<SignUpDetails />} />
          <Route path='/reset-password' element={<ForgotPassWord />} />
          <Route path='/reset-password/:id/:token' element={<ForgotPassWordDetails />} />
        </Routes>
      </div>
      <Footer />
    </Suspense>
  )
}

export default App;