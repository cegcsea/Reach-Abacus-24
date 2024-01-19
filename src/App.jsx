import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Home, Events, SingleEvent } from './pages';

export const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/events/event' element={<SingleEvent />} />
      </Routes>
    </Router>
  )
}

export default App;