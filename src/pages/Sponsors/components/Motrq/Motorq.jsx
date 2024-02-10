import React from 'react'
import motor from "../../../../assets/Reach/motorq.png"
import { Link } from 'react-router-dom';

const Abacus24 = () => {
    return (
        <div className='bg-content p-2'>
            <div className="abacus24-body flex flex-row-reverse flex-wrap">
                <div className="abacus24-content2 flex flex-col text-white w-full md:w-full lg:w-1/2 xl:w-1/2 px-5">
                    <div className=""><img src={motor} alt='' className='rounded-2xl'></img></div>
                </div>
                <div className="text-justify w-70 p-5 sm:p-10 flex text-white text-1xl h-100 w-full md:w-full lg:w-1/2 xl:w-1/2 flex-col gap-4">
                    <div className='abacus24-head flex pl-4 text-white font-medium text-xl sm:text-3xl'>
                        <h1 className='w-full'>
                            <span className="text-[#C778DD] font-bold">#</span>
                            <span className="text-white">motorq</span>
                        </h1>
                    </div>
                    <p className='text-base sm:text-xl text-slate-300'>
                        Headquartered in the San Francisco Bay Area, Motorq is an analytics software platform company that was created for the sole purpose of realizing the potential of connected-car data. The possibilities are virtually endless. They’re committed to leveraging this data to help businesses unlock the power of raw data by deciphering and creating actionable insights from a variety of disparate connected-car systems. Their cloud-based system allows them to deliver better, faster and more cost-effective insights so the clients can focus on what they do best.
                    </p>
                    <div className='self-start'>
                        <Link to={'https://motorq.com'} target='_blank'>
                            <button className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                                Read More {"<"}~{">"}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Abacus24;