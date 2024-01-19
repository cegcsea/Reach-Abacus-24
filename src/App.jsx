import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar, Footer } from './components';
import { Home, Events, SingleEvent, Workshop } from './pages';

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
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;