// Sponsors.js
import React from 'react';
import './Sponsors.css'; // Import a CSS file to define styles
import sponsors from '../assets/Sponsors1.png';
import spon1 from '../assets/resized/spon11.jpg';
import spon2 from '../assets/resized/spon22.jpg';
import spon3 from '../assets/resized/spon3.jpg';
import spon4 from '../assets/resized/spon4.jpg';
import spon5 from '../assets/resized/spon5.jpg';
import spon6 from '../assets/resized/spon6.jpg';

const sponsorData = [
    { image: spon1, name: 'Motarq', desc: 'Title Sponsor' },
    { image: spon2, name: 'Interview cake', desc: 'Coupon Sponsor' },
    { image: spon3, name: 'Collar Jobskart', desc: 'Educational Sponsor' },
    { image: spon4, name: 'Echo 3d', desc: 'Coupon Sponsor' },
    { image: spon5, name: 'SRP Craft', desc: 'Logistics Sponsor' },
    { image: spon6, name: 'Web3 Chennai', desc: 'Workshop sponsor' },
];

// Sponsors.js

// ... (other imports)

const Sponsors = () => {
    return (
        <div className='sponsor bg-content' style={{ minHeight: '100vh' }}>
            <div className='p-4 flex items-center font-sans justify-left text-white text-2xl' style={{ height: '15%' }}>
                <h1>
                    <span className="text-purple-500">#</span>
                    <span className="text-white">sponsors</span>
                </h1>
                <div className="line"></div>
            </div>
            <div id='con' className='flex flex-col md:flex-row gap-6' style={{ height: '85%' }}>
                {/* Conditional rendering based on screen size */}
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
