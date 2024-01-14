import React from 'react';

function Header() {
  return (
    <div className='py-8 px-10'>
      <h1 className="text-4xl lg:text-5xl md:text-4xl sm:text-3xl text-white">
        <span className="text-purple-500">/</span>
        <span className="text-white">workshop</span>
      </h1>
      <h4 className="text-white">event tagline</h4>
    </div>
  );
}

export default Header;
