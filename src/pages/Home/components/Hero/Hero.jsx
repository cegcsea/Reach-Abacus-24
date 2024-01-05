import React from 'react';

import Banner from "../../../../assets/Hero/banner.png";
import Logo from "../../../../assets/Hero/abacus_logo.png"

const Hero = () => {
    return (
        <>
            <div className="px-5 flex items-center justify-between sm:flex-row flex-col">
                <div className="w-full sm:w-1/2 p-5">
                    <h1 className="font-semibold text-[32px] text-white mb-3">
                        Abacus <span className="text-[#C778DD]">
                            “Ideas Converge and Possibilities Unfold”
                        </span>
                    </h1>
                    <p className="text-[#ABB2BF] my-6">
                        Navigating the Future, One Innovation at a Time
                    </p>
                    <button className="text-white font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]">
                        Contact Us!!
                    </button>
                </div>
                <div className="w-full sm:w-1/2">
                    <div className="">
                        <img src={Logo} alt="" className='' />
                    </div>
                    <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF]">
                        <div className="w-4 h-4 bg-[#C778DD]"></div>
                        <div className="">
                            Tagline of the year <span className="text-white">2024</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-[5rem] flex justify-center items-center px-10">
                <img className="" src={Banner} alt="" />
            </div>
        </>
    );
};

export default Hero;