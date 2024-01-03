// Sponsors.js
import React from 'react';
import './Sponsors.css'; // Import a CSS file to define styles
import sponsors from '../assets/Sponsors1.png';
import spon1 from '../assets/spon1.png';
import spon2 from '../assets/spon2.png';
import spon3 from '../assets/spon3.jpg';
import spon4 from '../assets/spon4.png';
import spon5 from '../assets/spon5.png';
import spon6 from '../assets/spon6.png';

const Sponsors = () => {
    return (
        <div className='sponsor bg-content'>
            <div className='p-4 flex items-center font-sans justify-left text-white text-2xl'>
                <h1>
                    <span className="text-purple-500">#</span>
                    <span className="text-white">sponsors</span>
                </h1>
                <div className="line"></div>
            </div>
            <div id='con' className='flex'>
                <div className='left-content' style={{ width: '40%', height: '100%', overflow: 'hidden' }}>
                    <img src={sponsors} alt="Sponsor Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className='right-content'>
                  
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
