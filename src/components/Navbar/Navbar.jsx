import React, { useState } from 'react';
import navImage from '../../assets/nav-img.png';
import Navigation from './Navbar-Mobile';

const Navbar = () => {
  const [activeButton, setActiveButton] = useState('home');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <nav className="bg-navbar p-4 flex items-center font-sans justify-between text-white lg:relative">
      {/* Left side - Icon and Heading */}
      <div className="flex items-center">
        <img src={navImage} alt="Abacus Icon" className="w-8 h-8 mr-2" />
        <span className="font-bold text-lg">Abacus</span>
      </div>

      {/* Regular menu for larger screens */}
      <div className="hidden lg:flex items-center space-x-4">
      <button
          className={`text-white flex items-center ${
            activeButton === 'home' ? 'border-b-2 border-purple-300' : ''
          }`}
          onClick={() => handleButtonClick('home')}
        >
          <span className={`text-${activeButton === 'home' ? 'white' : 'purple-500'}`}>#</span>
          <span className={`text-${activeButton === 'home' ? 'purple-500' : 'white'}`}>home</span>
        </button>
        <button
          className={`text-white flex items-center ${
            activeButton === 'about' ? 'border-b-2 border-purple-300' : ''
          }`}
          onClick={() => handleButtonClick('about')}
        >
          <span className={`text-${activeButton === 'about' ? 'white' : 'purple-500'}`}>#</span>
          <span className={`text-${activeButton === 'about' ? 'purple-500' : 'white'}`}>about</span>
        </button>
        <button
          className={`text-white flex items-center ${
            activeButton === 'events' ? 'border-b-2 border-purple-300' : ''
          }`}
          onClick={() => handleButtonClick('events')}
        >
          <span className={`text-${activeButton === 'events' ? 'white' : 'purple-500'}`}>#</span>
          <span className={`text-${activeButton === 'events' ? 'purple-500' : 'white'}`}>events</span>
        </button>
        <button
          className={`text-white flex items-center ${
            activeButton === 'workshops' ? 'border-b-2 border-purple-300' : ''
          }`}
          onClick={() => handleButtonClick('workshops')}
        >
          <span className={`text-${activeButton === 'workshops' ? 'white' : 'purple-500'}`}>#</span>
          <span className={`text-${activeButton === 'workshops' ? 'purple-500' : 'white'}`}>workshops</span>
        </button>
        <button
          className={`text-white flex items-center ${
            activeButton === 'login' ? 'border-b-2 border-purple-300' : ''
          }`}
          onClick={() => handleButtonClick('login')}
        >
          <span className={`text-${activeButton === 'login' ? 'white' : 'purple-500'}`}>#</span>
          <span className={`text-${activeButton === 'login' ? 'purple-500' : 'white'}`}>login</span>
        </button>
      </div>

      {/* Navigation for smaller screens */}
      <div className="lg:hidden fixed bottom-0 w-full m-2 flex justify-center items-center mx-auto" style={{left: '0px'}}>
    <Navigation />
</div>


    </nav>
  );
};

export default Navbar;
