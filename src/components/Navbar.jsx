// Navbar.js
import React, { useState } from 'react';
import navImage from '../assets/nav-img.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState('home');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
    closeDropdown();
  };

  return (
    <nav className="bg-navbar p-4 flex items-center font-sans justify-between text-white">
      {/* Left side - Icon and Heading */}
      <div className="flex items-center">
        <img src={navImage} alt="Abacus Icon" className="w-8 h-8 mr-2" />
        <span className="font-bold text-lg">Abacus</span>
      </div>

      {/* Right side - Buttons with Hash Icon */}
      <div className="lg:hidden">
        {/* Mobile menu button */}
        <button
          className="text-white flex items-center transition duration-300"
          onClick={toggleDropdown}
        >
          {isDropdownOpen ? (
            // Cancel icon when dropdown is open
            <span>&#10006;</span>
          ) : (
            // Sandwich icon when dropdown is closed
            <span>&#9776;</span>
          )}
        </button>
      </div>

      {/* Dropdown menu for smaller screens */}
      {isDropdownOpen && (
        <div className="lg:hidden absolute top-16 right-4 bg-navbar p-4 flex flex-col space-y-2 transition duration-300">
          <button
            onClick={() => handleButtonClick('home')}
          >
            <span className={`text-${activeButton === 'home' ? 'white' : 'purple-500'}`}>#</span>
            <span className={`text-${activeButton === 'home' ? 'purple-500' : 'white'}`}>home</span>
          </button>
          <button
            onClick={() => handleButtonClick('about')}
          >
            <span className={`text-${activeButton === 'about' ? 'white' : 'purple-500'}`}>#</span>
            <span className={`text-${activeButton === 'about' ? 'purple-500' : 'white'}`}>about</span>
          </button>
          <button
            onClick={() => handleButtonClick('events')}
          >
            <span className={`text-purple-500`}>#</span>
            <span className={`text-white`}>events</span>
          </button>
          <button
            onClick={() => handleButtonClick('workshops')}
          >
            <span className={`text-${activeButton === 'workshops' ? 'white' : 'purple-500'}`}>#</span>
            <span className={`text-${activeButton === 'workshops' ? 'purple-500' : 'white'}`}>workshops</span>
          </button>
          <button
            onClick={() => handleButtonClick('login')}
          >
            <span className={`text-${activeButton === 'login' ? 'white' : 'purple-500'}`}>#</span>
            <span className={`text-${activeButton === 'login' ? 'purple-500' : 'white'}`}>login</span>
          </button>
        </div>
      )}

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
    </nav>
  );
};

export default Navbar;
