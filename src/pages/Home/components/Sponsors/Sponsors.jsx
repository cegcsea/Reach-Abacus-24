// Sponsors.js
import React from 'react';
import './Sponsors.css'; // Import a CSS file to define styles
import sponsors from '../../../../assets/Sponsors/Sponsors1.png';
import { sponsorData } from '../../../../constants';

// Sponsors.js

// ... (other imports)

const Sponsors = () => {
    return (
        <div className='sponsor bg-content' style={{ minHeight: '100vh' }}>
            <div className='p-4 flex items-center font-sans justify-left text-white text-[32px]' style={{ height: '15%' }}>
                <h1>
                    <span className="text-purple-500">#</span>
                    <span className="text-white">sponsors</span>
                </h1>
                <div className="line w-2/3 h-px bg-[#C778DD]"></div>
            </div>
            <div id='con' className='flex flex-col md:flex-row gap-6' style={{ height: '85%' }}>
                <div className='left-content md:w-2/6 h-full overflow-hidden hidden md:block'>
                    <img src={sponsors} alt="Sponsor Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className='right-content grid gap-4 items-center justify-items-center md:w-4/6' style={{ marginLeft: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', height: '100%' }}>
                    {sponsorData.map((sponsor, index) => (
                        <div key={index} className='grid-item text-center flex flex-col items-center border-solid border-white p-4'>
                            <img src={sponsor.image} alt={`Sponsor ${index + 1}`} style={{ maxWidth: '70%', maxHeight: '70%', objectFit: 'cover' }} />
                            <p className='mt-2 text-white font-style'>{sponsor.name}</p>
                            <p className='mt-0 text-white font-style1'>{sponsor.desc}</p>
                            {/* Add font-style class */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
