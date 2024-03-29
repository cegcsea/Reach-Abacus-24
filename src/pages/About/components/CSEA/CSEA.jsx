import React from 'react'
import csea from "../../../../assets/Reach/csea.png";
import { Link } from 'react-router-dom';

const Abacus24 = () => {
    return (
        <div className='abacus24 bg-content p-2 w-200'>
            <div className="abacus24-body flex flex-row-reverse flex-wrap">
                <div className="abacus24-content2 flex flex-col text-white w-full md:w-full lg:w-1/2 xl:w-1/2 ">
                    <div className="px-3"><img src={csea} alt='csea' className='rounded-2xl' /></div>
                </div>
                <div className="text-justify w-70 p-5 sm:p-10 flex text-white text-1xl h-100 w-full md:w-full lg:w-1/2 xl:w-1/2 flex-col gap-4">
                    <div className='abacus24-head flex pl-4 text-white font-medium text-xl sm:text-3xl'>
                        <h1 className='w-full'>
                            <span className="text-[#C778DD] font-bold">#</span>
                            <span className="text-white">csea</span>
                        </h1>
                    </div>
                    <p className='text-base sm:text-xl text-slate-300'>

                        Stemming from CEG's Department of Computer Science and Engineering, the CSEA epitomizes a commitment to technological advancement, bolstered by a distinguished alumni network.

                        As a pivotal Engineering Association within the city, the CSEA amalgamates academic rigor and industry expertise, facilitating collaborative initiatives among students and esteemed faculty.

                        The CSEA serves as a nexus for Computer Science Engineers worldwide, emphasizing awareness and fostering transformative technological innovations for societal betterment.
                    </p>
                    <div className='self-start'>
                        <Link to={'https://cseaceg.org.in'} target='_blank'>
                            <button className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                                Explore CSEA {"<"}~{">"}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Abacus24;