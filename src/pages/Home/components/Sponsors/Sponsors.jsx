// Sponsors.js
import React from 'react';
import './Sponsors.css'; // Import a CSS file to define styles
import sponsors from '../../../../assets/Sponsors/Sponsors1.png';
import { sponsorData } from '../../../../constants';

// Sponsors.js

// ... (other imports)

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
            <div id='con' className='flex flex-col md:flex-row gap-6 p-4'>
                {/* Conditional rendering based on screen size */}
                <div className='left-content md:w-2/6 h-full overflow-hidden hidden md:block w-2/5'>
                    <img src={sponsors} alt="Sponsor Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className='right-content md:ml-[20px] grid gap-4 items-center justify-items-center md:w-3/5' style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', height: '100%' }}>
                    {sponsorData.map((sponsor, index) => (
                        // <div key={index} className='text-center flex flex-col items-center border border-white p-4'>
                        //     <img src={sponsor.image} alt={`Sponsor ${index + 1}`} style={{ maxWidth: '70%', maxHeight: '70%', objectFit: 'cover' }} />
                        //     <p className='mt-2 text-white font-style'>{sponsor.name}</p>
                        //     <p className='mt-0 text-white font-style1'>{sponsor.desc}</p>
                        // </div>
                        <div className="border border-[#ABB2BF]">
                            <div className=" p-2">
                                <h2 className=" font-semibold text-slate-300 text-center">{sponsor.desc}</h2>
                            </div>
                            <div className="flex gap-2 border-t border-[#ABB2BF] flex-col justify-center items-center p-2 text-[#ABB2BF]">
                                <img src={sponsor.image} alt={`Sponsor ${index + 1}`} className='w-full object-cover' />
                                <p className='mt-2 text-white text-center font-style'>{sponsor.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
