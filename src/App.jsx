import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar, Footer } from './components';
import {
  Home, Events, SingleEvent,
  Workshop, Login, SignUpDetails
} from './pages';

export const App = () => {
  return (
    <Router>
      <NavBar />
      <div className='px-[4rem]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/workshop' element={<Workshop />} />
          <Route path='/events' element={<Events />} />
          <Route path='/events/event' element={<SingleEvent />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup/details' element={<SignUpDetails />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;