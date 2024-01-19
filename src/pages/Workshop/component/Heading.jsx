import React from 'react';

function Header() {
  return (
    <div className='py-8 px-10 flex gap-3 flex-col'>
      <h1 className="text-4xl lg:text-5xl md:text-4xl sm:text-3xl text-white">
        <span className="text-[#C778DD]">/</span>
        <span className="text-white">workshop</span>
      </h1>
      <h4 className="text-gray-400 text-base">Workshop tagline goes here</h4>
    </div>
  );
}

export default Header;
