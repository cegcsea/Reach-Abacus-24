import React from 'react';

import Banner from "../../../../assets/Reach/Reach_logo.png";
import Logo from "../../../../assets/Reach/cse.png"
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <div className="px-5 flex items-center justify-between sm:flex-row flex-col">
                <div className="w-full sm:w-1/2 p-5">
                    <h1 className="font-semibold text-[32px] text-white mb-3">
                        REACH '24 <span className="text-[#C778DD]">
                            “Ideas Converge and Possibilities Unfold”
                        </span>
                    </h1>
                    <p className="text-[#ABB2BF] my-6">
                        Navigating the Future, One Innovation at a Time
                    </p>
                    <a href='#contact'>
                        <button className="text-white font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]">
                            Contact Us!!
                        </button>
                    </a>
                </div>
                <div className="w-full sm:w-1/2">
                    <div className="">
                        <img src={Logo} alt="" className='' />
                    </div>
                    <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF]">
                        <div className="w-4 h-4 bg-[#C778DD]"></div>
                        <div className="">
                            Innovate, Integrate, Inspire: ABACUS'24
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-[5rem] flex justify-center items-center sm:px-10 px-2">
                <img className="" src={Banner} alt="" />
            </div>
        </>
    );
};

export default Hero;