import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import Home from './pages/Home/Home';
import Workshop from './pages/Workshop/Workshop';

export const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/workshop' element={<Workshop />} />
      </Routes>
    </Router>
  )
}
export default App;