import React from 'react'
import abacus24 from "../../../../assets/Hero/abacus_logo.png"

const Abacus24 = () => {
    return (
        <div className='bg-content p-2'>
            <div className="abacus24-body flex flex-row-reverse flex-wrap">
                <div className="abacus24-content2 flex flex-col text-white w-full md:w-full lg:w-1/2 xl:w-1/2 ">
                    <div className=""><img src={abacus24} alt=''></img></div>
                </div>
                <div className="text-justify w-70 p-5 sm:p-10 flex text-white text-1xl h-100 w-full md:w-full lg:w-1/2 xl:w-1/2 flex-col gap-4">
                    <div className='abacus24-head flex pl-4 text-white font-medium text-xl sm:text-3xl'>
                        <h1 className='w-full'>
                            <span className="text-[#C778DD] font-bold">#</span>
                            <span className="text-white">abacus-2024</span>
                        </h1>
                    </div>
                    <p className='text-base sm:text-xl text-slate-300'>
                        ABACUS, orchestrated by the Computer Science and Engineering Association (CSEA) at the College of Engineering, Guindy (CEG - Anna University)
                        , is an esteemed annual intercollege symposium.

                        This flagship event showcases technical excellence through competitions, hackathons, workshops, and professional seminars, offering students a platform to exhibit their skills and vie for coveted prizes and internships.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Abacus24;