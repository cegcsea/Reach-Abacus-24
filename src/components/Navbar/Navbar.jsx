import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import navImage from '../../assets/Reach/Reach_logo.png';
import Navigation from './Navbar-Mobile';

const Navbar = () => {
  const { auth } = useContext(AuthContext);
  const [activeButton, setActiveButton] = useState('home');

  const handleButtonClick = (Link) => {
    setActiveButton(Link);
  };

  return (
    <nav className="bg-navbar p-4 flex items-center font-sans justify-between text-white lg:relative">
      {/* Left side - Icon and Heading */}
      <Link to='/'>
        <div className="flex items-center">
          <img src={navImage} alt="Abacus Icon" className="h-8 mr-2" />
        </div>
      </Link>

      {/* Regular menu for larger screens */}
      <div className="hidden lg:flex items-center space-x-4">
        <Link
          to="/"
          className={`text-white flex items-center ${activeButton === 'home' ? 'border-b-2 border-purple-300' : ''
            }`}
          onClick={() => handleButtonClick('home')}
        >
          <span className={`text-${activeButton === 'home' ? 'white' : '[#C778DD]'}`}>#</span>
          <span className={`text-${activeButton === 'home' ? '[#C778DD]' : 'white'}`}>home</span>
        </Link>
        <Link
          to="/about"
          className={`text-white flex items-center ${activeButton === 'about' ? 'border-b-2 border-purple-300' : ''
            }`}
          onClick={() => handleButtonClick('about')}
        >
          <span className={`text-${activeButton === 'about' ? 'white' : '[#C778DD]'}`}>#</span>
          <span className={`text-${activeButton === 'about' ? '[#C778DD]' : 'white'}`}>about</span>
        </Link>
        <Link
          to="/events"
          className={`text-white flex items-center ${activeButton === 'events' ? 'border-b-2 border-purple-300' : ''
            }`}
          onClick={() => handleButtonClick('events')}
        >
          <span className={`text-${activeButton === 'events' ? 'white' : '[#C778DD]'}`}>#</span>
          <span className={`text-${activeButton === 'events' ? '[#C778DD]' : 'white'}`}>events</span>
        </Link>
        <Link
          to="/workshops"
          className={`text-white flex items-center ${activeButton === 'workshops' ? 'border-b-2 border-purple-300' : ''
            }`}
          onClick={() => handleButtonClick('workshops')}
        >
          <span className={`text-${activeButton === 'workshops' ? 'white' : '[#C778DD]'}`}>#</span>
          <span className={`text-${activeButton === 'workshops' ? '[#C778DD]' : 'white'}`}>workshops</span>
        </Link>
        {!auth ? (
          <Link
            to="/login"
            className={`text-white flex items-center ${activeButton === 'login' ? 'border-b-2 border-purple-300' : ''
              }`}
            onClick={() => handleButtonClick('login')}
          >
            <span className={`text-${activeButton === 'login' ? 'white' : '[#C778DD]'}`}>#</span>
            <span className={`text-${activeButton === 'login' ? '[#C778DD]' : 'white'}`}>login</span>
          </Link>
        ) : (
          <Link
            to="/profile"
            className={`text-white flex items-center ${activeButton === 'profile' ? 'border-b-2 border-purple-300' : ''
              }`}
            onClick={() => handleButtonClick('profile')}
          >
            <span className={`text-${activeButton === 'profile' ? 'white' : '[#C778DD]'}`}>#</span>
            <span className={`text-${activeButton === 'profile' ? '[#C778DD]' : 'white'}`}>profile</span>
          </Link>
        )}
      </div>

      {/* Navigation for smaller screens */}
      <div className="lg:hidden fixed bottom-0 w-full m-2 flex justify-center items-center mx-auto" style={{ left: '0px' }}>
        <Navigation />
      </div>


    </nav>
  );
};

export default Navbar;
