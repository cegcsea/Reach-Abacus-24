// Sponsors.js
import React from 'react';
import './Sponsors.css'; // Import a CSS file to define styles
import sponsors from '../../../../assets/Sponsors/Sponsors1.png';
import { sponsorData } from '../../../../constants';
import { Link } from 'react-router-dom';

const Sponsors = () => {
    return (
        <div className='sponsor bg-content w-full'>
            <div className='p-4 flex items-center font-sans justify-left text-white text-[32px]'>
                <h1>
                    <span className="text-purple-500">#</span>
                    <span className="text-white">sponsors</span>
                </h1>
                <div className="line w-2/3 h-px bg-[#C778DD]"></div>
            </div>
            {/* <div className='flex md:flex-row flex-col justify-between items-center px-3 md:px-10 py-5 relative md:gap-0 gap-5'>
                <img src={sponsors} alt="Sponsor Logo" className='w-1/2 absolute top-0.5 opacity-40 left-[25%] z-0' />
                <div className="border border-[#ABB2BF] md:min-h-[300px] w-full md:w-1/3 z-10">
                    <div className=" p-2">
                        <h2 className=" font-semibold text-slate-300 text-center">{sponsorData[0].desc}</h2>
                    </div>
                    <div className="flex gap-2 border-t border-[#ABB2BF] h-full flex-col justify-center items-center p-2 text-[#ABB2BF]">
                        <img src={sponsorData[0].image} alt={`Sponsor 1`} className='w-full object-cove' />
                        <p className='mt-2 text-white text-center font-style'>{sponsorData[0].name}</p>
                    </div>
                </div>
                <Link to={'/sponsors'} className='z-10 md:block hidden'>
                    <p className='text-3xl text-white font-semibold hover:text-orange-400/90 transition-all cursor-pointer'>
                        {'OUR SPONSORS < ~ >'}
                    </p>
                </Link>
                <div className="border border-[#ABB2BF] md:min-h-[300px] w-full md:w-1/3 z-10">
                    <div className=" p-2">
                        <h2 className=" font-semibold text-slate-300 text-center">{sponsorData[1].desc}</h2>
                    </div>
                    <div className="flex gap-2 border-t border-[#ABB2BF] flex-col justify-center items-center p-2 text-[#ABB2BF]">
                        <img src={sponsorData[1].image} alt={`Sponsor 2`} className='w-full object-cover' />
                        <p className='mt-2 text-white text-center font-style'>{sponsorData[1].name}</p>
                    </div>
                </div>
            </div> */}
            <p className='text-3xl sm:text-6xl mt-10 text-center text-white'>
                COMING SOON!
                <p className='text-sm sm:text-base text-gray-400'>Our sponsors will be revealed soon!</p>
            </p>
        </div>
    );
};

export default Sponsors;
