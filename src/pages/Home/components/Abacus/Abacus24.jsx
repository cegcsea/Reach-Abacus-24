import React from 'react'
import abacus24 from "../../../../assets/Hero/abacus_logo.png";
import { useNavigate } from 'react-router-dom';

const Abacus24 = () => {
    const navigate = useNavigate();

    return (
        <div className='abacus24 bg-content p-2 w-200' style={{ minHeight: '90vh' }}>
            <div className='abacus24-head flex items-center pl-4 text-white font-medium text-[32px]'>
                <h1>
                    <span className="text-[#C778DD] font-bold">#</span>
                    <span className="text-white">abacus-2024</span>
                </h1>
                <div className="line w-2/3 bg-[#C778DD] self-center"></div>
            </div>
            <div className="abacus24-body flex flex-wrap justify-center align-center">
                <div className="abacus24-content2 flex flex-col justify-center align-center text-white w-full md:w-full lg:w-1/2 xl:w-1/2 ">
                    <div className=""><img src={abacus24} alt=''></img></div>
                </div>
                <div className="abacus24-content text-justify w-70 p-5 sm:p-10 flex justify-center align-center text-white text-1xl h-100 w-full md:w-full lg:w-1/2 xl:w-1/2 items-center flex-col gap-4">
                    <p className='text-base sm:text-xl text-slate-300'>
                        The conglomeration of the brightest minds enhancing the participant’s knowledge and creative potentials. The 3 day annual symposium showcases 15+ events and flagship contests of crystal gazing technology. Abacus's coverage and deliberations of earlier symposia have been a grand success with insatiable thirst for technological development rejuvenating the technology with innovation. This year, Abacus is back offline on a grander scale with an innovative edge to all the events.
                    </p>
                    <div className='self-start'>
                        <button className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150"
                            onClick={() => navigate('/about')}>
                            Read More {"<"}~{">"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Abacus24;