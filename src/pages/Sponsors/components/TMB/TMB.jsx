import React from 'react'
import tmb from "../../../../assets/Reach/tmb.png";
import { Link } from 'react-router-dom';

const MotorQ = () => {
    return (
        <div className='abacus24 bg-content p-2 w-200'>
            <div className="abacus24-body flex flex-row flex-wrap">
                <div className="abacus24-content2 flex flex-col text-white w-full md:w-full lg:w-1/2 xl:w-1/2 px-5">
                    <div><img src={tmb} alt='TMB Logo' className='rounded-2xl'></img></div>
                </div>
                <div className="text-justify w-70 p-5 sm:p-10 flex text-white text-1xl h-100 w-full md:w-full lg:w-1/2 xl:w-1/2 flex-col gap-4">
                    <div className='abacus24-head flex pl-4 text-white font-medium text-xl sm:text-3xl'>
                        <h1 className='w-full'>
                            <span className="text-[#C778DD] font-bold">#</span>
                            <span className="text-white">TMB</span>
                        </h1>
                    </div>
                    <p className='text-base sm:text-xl text-slate-300'>
                        Tamilnad Mercantile Bank Limited (TMB) is an Indian bank headquartered at Thoothukudi, Tamil Nadu. The bank currently has 509 full branches throughout India, 12 regional offices and two link offices, two central processing centres, one service branch, four currency chests, 48 eLobby centres, 262 cash recycler machines (cash deposit machines) and 1151 automated teller machines (ATM).
                    </p>
                    <div className='self-start'>
                        <Link to={'https://www.tmbnet.in'} target='_blank'>
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

export default MotorQ;