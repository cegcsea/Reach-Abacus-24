import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar, Footer, ScrollToTop } from './components';
import {
  Home, Events, SingleEvent,
  Workshop, Login, SignUpDetails,
  About,
  SingleWorkshop
} from './pages';

export const App = () => {
  return (
    <Router>
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
          <Route path='/login' element={<Login />} />
          <Route path='/signup/details' element={<SignUpDetails />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;