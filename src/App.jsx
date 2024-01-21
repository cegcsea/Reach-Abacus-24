import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar, Footer } from './components';
import {
  Home, Events, SingleEvent,
  Workshop, Login, SignUpDetails,
  About
} from './pages';

export const App = () => {
  return (
    <Router>
      <NavBar />
      <div className='px-[1.5rem] sm:px-[4rem]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/workshop' element={<Workshop />} />
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