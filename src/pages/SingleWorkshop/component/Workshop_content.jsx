import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';

function Workshop_content({ workshop, isRegistered }) {
  const { handleWorkshopRegister, auth } = useContext(AuthContext);

  const handleRegister = () => {
    handleWorkshopRegister({ workshopId: workshop.code });
  }

  return (
    <div className='px-5 pb-10 flex justify-center items-center sm:flex-row flex-col'>
      {/* First Column */}
      <div className="lg:w-full md:w-full sm:w-full flex justify-center items-center">
        <img
          src={workshop.image}
          alt="Workshop"
          className="w-full"
        />
      </div>

      {/* Second Column */}
      <div className="lg:w-full md:w-full sm:w-full sm:p-4 p-0 flex flex-col gap-5">
        <div className='flex items-center justify-left text-white'>
          <h1 className='sm:text-2xl text-lg'>
            <span className="text-[#C778DD] font-semibold">#</span>
            <span className="text-white font-semibold">What_to_expect?</span>
          </h1>
          <div className="line w-2/3 h-px bg-[#C778DD]"></div>
        </div>

        {/* Content below the title */}
        <div className=" text-white">
          <p className='text-justify text-base sm:text-xl'>
            {workshop.content}<br /> <br />
            <p><span className='font-bold'>Pre-requisite: </span>{workshop.prerequistes}</p>
          </p>
        </div>
        {(auth && !isRegistered) && (
          <Link to={`/workshops/${workshop.code}/payment`}>
            <button className='m-3 w-fit border border-[#C778DD] px-4 py-2 text-white duration-150 hover:bg-[#C778DD33]'>
              Register {'<'}~{'>'}
            </button>
          </Link>
        )}
        {isRegistered && (
          <Link to={`/workshops/${workshop.code}/payment`}>
            <button className='m-3 w-fit border border-[#C778DD] px-4 py-2 text-white duration-150 hover:bg-[#C778DD33]'>
              Pay Now {'<'}~{'>'}
            </button>
          </Link>
        )}
        {!auth && (
          <Link to="/login">
            <button className='m-3 w-fit border border-[#C778DD] px-4 py-2 text-white duration-150 hover:bg-[#C778DD33]'>
              Login to Register {'<'}~{'>'}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Workshop_content;
