import React from 'react';
import bg1 from '../../../assets/Reach/MERN.png';

function Workshop_content() {
  return (
    <div className='px-5 pb-10 flex justify-center items-center sm:flex-row flex-col'>
      {/* First Column */}
      <div className="lg:w-full md:w-full sm:w-full flex justify-center items-center">
        <img
          src={bg1}
          alt="Workshop"
          className="w-full"
        />
      </div>

      {/* Second Column */}
      <div className="lg:w-full md:w-full sm:w-full sm:p-4 p-0 flex flex-col gap-5">
        <div className='flex items-center justify-left text-white'>
          <h1 className='sm:text-2xl text-lg'>
            <span className="text-[#C778DD] font-semibold">#</span>
            <span className="text-white font-semibold">MERN_Stack_Development</span>
          </h1>
          <div className="line w-2/3 h-px bg-[#C778DD]"></div>
        </div>

        {/* Content below the title */}
        <div className=" text-white">
          <p className='text-justify text-base sm:text-xl'>
            Engage in hands-on learning as we guide you through creating a simple yet impactful full-stack project. Ideal for both beginners and intermediate developers, this workshop not only provides valuable insights into essential MERN concepts but also offers guidance on further learning. Discover effective strategies and resources to stay updated with evolving technologies. As a bonus, practical suggestions on hosting full stack applications will be shared, ensuring you're well-equipped to take your projects live with confidence.<br />
            <br />
            Join us for a day of immersive learning, collaboration, and skill-building.<br /><br />

            <p><span className='font-bold'>Pre-requisite:</span> Basics of HTML, CSS & JS.</p>
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
