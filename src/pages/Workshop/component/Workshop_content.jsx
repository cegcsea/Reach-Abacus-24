import React from 'react';
import bg1 from './assests/bg1.png';

function Workshop_content() {
  return (
    <div className='px-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
      {/* First Column */}
      <div className="lg:w-full md:w-full sm:w-full">
        <img
          src={bg1}
          alt="Workshop"
          className="w-full h-auto"
        />
      </div>

      {/* Second Column */}
      <div className="lg:w-full md:w-full sm:w-full p-4 flex flex-col gap-10">
        <div className=' flex items-center font-sans justify-left text-white text-[32px]'>
          <h1>
            <span className="text-[#C778DD]">#</span>
            <span className="text-white">workshop-name</span>
          </h1>
          <div className="line w-2/3 h-px bg-[#C778DD]"></div>
        </div>

        {/* Content below the title */}
        <div className=" text-white">
          <p className='text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed accumsan quam vel justo lacinia, in scelerisque ipsum facilisis.
            Maecenas tincidunt lacus euismod erat fermentum, ut viverra sapien consequat.
            Nullam sit amet metus nec leo rhoncus finibus nec id lectus. Suspendisse potenti.
            Proin pulvinar ullamcorper purus, a luctus elit luctus ut.
            Vestibulum tincidunt, libero a volutpat cursus, ipsum justo tristique odio,
            sit amet lacinia odio eros vel odio. Integer quis ligula vel odio eleifend eleifend.
            Vivamus ullamcorper urna vitae ipsum eleifend, non sodales dolor vulputate.
          </p>
        </div>
        <button className='m-3 w-fit border border-[#C778DD] px-4 py-2 text-white duration-150 hover:bg-[#C778DD33]'>
          Register {'<'}~{'>'}
        </button>
      </div>
    </div>
  );
}

export default Workshop_content;
