import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';
import { FaClock, FaInfo, FaLocationArrow, FaMoneyBill } from 'react-icons/fa';

function Workshop_content({ workshop, isRegistered, isPaidWorkshop }) {
  const { auth, user } = useContext(AuthContext);

  const colorFinder = (status) => {
    if (status === 'PENDING') return 'text-yellow-500';
    if (status === 'SUCCESS') return 'text-green-500';
    if (status === 'FAILURE') return 'text-red-400';
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
        {workshop.bulkBooking && (
          <p className='flex justify-center items-center gap-2 text-white bg-gray-500 py-3 px-1 rounded-3xl'>
            <span className='text-yellow-300 text-2xl p-1 rounded-full'>
              <FaMoneyBill />
            </span>
            Bulk Booking available! For 5 participants, Rs. 1000/- only!
          </p>
        )}
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
            {(auth && user.hostCollege === 'Government College of Technology, Coimbatore') && (
              <>
                <div className='flex flex-col gap-2'>
                  <p className='flex gap-2 items-center'>
                    <span className='text-2xl text-red-400'><FaLocationArrow /></span>
                    {workshop.venue[0].location}
                  </p>
                  <p className='flex gap-3 items-center'>
                    <span className='text-2xl text-yellow-300'><FaClock /></span>
                    {workshop.venue[0].time}
                  </p>
                </div><br />
              </>
            )}
            <p><span className='font-bold text-xl'>Pre-requisites: </span>
              <ul className='flex flex-col gap-3 list-disc mt-2'>
                <li>Participants are required to bring laptops.</li>
                <li>{workshop.prerequistes}</li>
              </ul>
            </p>
          </p>
        </div>
        {(auth && !isRegistered) && (
          <div className='flex gap-3'>
            <Link to={`/workshops/${workshop.code}/payment`}>
              <button className='m-3 w-fit border border-[#C778DD] px-4 py-2 text-white duration-150 hover:bg-[#C778DD33]'>
                Register {'<'}~{'>'}
              </button>
            </Link>
            {workshop.bulkBooking && (
              <Link to={workshop.bulkBooking.link} target='_blank'>
                <button className='m-3 w-fit border border-lime-400 px-4 py-2 text-white duration-150 hover:bg-[#93dd7833]'>
                  Bulk Register {'<'}~{'>'}
                </button>
              </Link>
            )}
          </div>
        )}
        {(auth && isRegistered && isPaidWorkshop.status === 'PENDING') && (
          <>
            <button className='m-3 w-fit border border-[#ddb878] px-4 py-2 text-white duration-150 hover:bg-[#ddc27833]'>
              Paid for the workshop {'<'}~{'>'}
            </button>
            <p className='text-xl font-semibold text-white'>Status:&nbsp;
              <span className={colorFinder(isPaidWorkshop.status)}>
                {isPaidWorkshop.status}
              </span>
            </p>
            <p className='flex justify-center items-center gap-2 text-white bg-gray-500 py-3 px-1 rounded-3xl'>
              <span className='text-white bg-red-400 p-1 rounded-full'>
                <FaInfo />
              </span>
              Your payment will be reflected within 2 business days!
            </p>
          </>
        )}
        {(auth && isRegistered && isPaidWorkshop.status === 'SUCCESS') && (
          <>
            <button className='m-3 w-fit border border-lime-400 px-4 py-2 text-white duration-150 hover:bg-lime-400/40'>
              Payment Verified! {'<'}~{'>'}
            </button>
            <p className='text-xl font-semibold text-white'>Status:&nbsp;
              <span className={colorFinder(isPaidWorkshop.status)}>
                {isPaidWorkshop.status}
              </span>
            </p>
          </>
        )}
        {(auth && isRegistered && isPaidWorkshop.status === 'FAILURE') && (
          <>
            <Link to={`/workshops/${workshop.code}/payment`}>
              <button className='m-3 w-fit border border-red-400 px-4 py-2 text-white duration-150 hover:bg-red-400/40'>
                Pay Again! {'<'}~{'>'}
              </button>
            </Link>
            <p className='text-xl font-semibold text-white'>Status:&nbsp;
              <span className={colorFinder(isPaidWorkshop.status)}>
                {isPaidWorkshop.status}
              </span>
            </p>
            <p className='flex justify-center items-center gap-2 text-white bg-gray-500 py-3 px-1 rounded-3xl'>
              <span className='text-white bg-red-400 p-1 rounded-full'>
                <FaInfo />
              </span>
              There seems to be some error during your payment. Please initiate payment again!
            </p>
          </>
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
