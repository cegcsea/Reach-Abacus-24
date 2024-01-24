import React from 'react';
import devrloper from '../../assets/Hero/profile.png';
import { FaLocationDot } from "react-icons/fa6";
import { TbHanger } from "react-icons/tb";

function Profile() {
    return (
        <div className='flex flex-col bg-[#34363e] px-5'>
            <div className="text-white font-medium pt-5 text-[32px] self-start">
                <p>
                    <span className="text-[#C778DD]">/</span>
                    <span>profile</span>
                </p>
            </div>
            <div className='flex md:flex-row flex-col justify-center items-center gap-5 py-10'>
                <div className='w-full md:w-1/2 self-start flex flex-col gap-10'>
                    <div className='flex flex-col gap-3'>
                        <p className='text-4xl md:text-5xl'>
                            <span className="text-[#C778DD]">Hello! </span>
                            <span className='text-white font-semibold'>Developer</span>
                        </p>
                        <p className='text-gray-400'><span className='font-bold'>Abacus Id: </span> 1018825</p>
                    </div>
                    <div className='text-gray-300 text-base md:text-xl min-[900px]:text-2xl flex flex-col gap-3'>
                        <p className='flex'>
                            <span className='text-red-400 text-xl md:text-3xl'><FaLocationDot /></span>&nbsp;Studying in College of Engineering, Guindy. Striding through year 3 in CSE department!
                        </p>
                        <p className='flex'>
                            <span className='text-red-400 text-xl md:text-3xl'><TbHanger /></span>&nbsp;Seems like you don't need accomodation.
                        </p>
                    </div>
                    <button className='my-10 tracking-wider self-center w-fit border border-[#C778DD] px-4 py-2 text-white duration-150 hover:bg-[#C778DD33]'>
                        Update Profile {'<'}~{'>'}
                    </button>
                </div>
                <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
                    <img src={devrloper} className='w-full sm:w-[80%] object-contain' />
                    <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF] w-full sm:w-3/4">
                        <div className="w-4 h-4 bg-[#C778DD]"></div>
                        <div className="">
                            #Email: <span className="text-white">test@gmail.com</span>
                        </div>
                    </div>
                    <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF] w-full sm:w-3/4">
                        <div className="w-4 h-4 bg-[#C778DD]"></div>
                        <div className="">
                            #Mobile: <span className="text-white">123456789</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;