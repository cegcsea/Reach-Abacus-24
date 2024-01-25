import React from 'react'
import abacus24 from "../../../../assets/Hero/abacus_logo.png";

const Abacus24 = () => {
    return (
        <div className='abacus24 bg-content p-2 w-200'>
            <div className="abacus24-body flex flex-row flex-wrap">
                <div className="abacus24-content2 flex flex-col text-white w-full md:w-full lg:w-1/2 xl:w-1/2 ">
                    <div className=""><img src={abacus24} alt=''></img></div>
                </div>
                <div className="text-justify w-70 p-5 sm:p-10 flex text-white text-1xl h-100 w-full md:w-full lg:w-1/2 xl:w-1/2 flex-col gap-4">
                    <div className='abacus24-head flex pl-4 text-white font-medium text-xl sm:text-3xl'>
                        <h1 className='w-full'>
                            <span className="text-[#C778DD] font-bold">#</span>
                            <span className="text-white">reach</span>
                        </h1>
                    </div>
                    <p className='text-base sm:text-xl text-slate-300'>
                        Every year, as a component of ABACUS, we organize outreach initiatives in renowned colleges across Tamil Nadu, aiming to enhance student engagement and amplify awareness for our symposium.

                        Our specialized workshops under the REACH umbrella introduce students to emerging technologies, ensuring they remain at the forefront of innovation and industry relevance.

                        REACH goes beyond academics by offering tailored events that prepare students for competitive landscapes, equipping them with essential skills and confidence for future placements and interviews.

                    </p>
                    <div className='self-start'>
                        <button className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                            Read More {"<"}~{">"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Abacus24;