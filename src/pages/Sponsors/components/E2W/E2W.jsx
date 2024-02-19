import React from 'react'
import motor from "../../../../assets/Reach/e2w.png"
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
                            <span className="text-white">e2w</span>
                        </h1>
                    </div>
                    <p className='text-base sm:text-xl text-slate-300'>
                    E2W STUDY was founded with a mission to bring world-class education closer to our students. Since our inception, we have helped more than 2700+ students and professionals realize their dreams of studying abroad and settling in overseas countries. We are here to help students to realize their dream of studying in UK , Europe , Canada , Australia and Singapore.
                    </p>
                    <div className='self-start'>
                        <Link to={'https://e2wstudy.com'} target='_blank'>
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