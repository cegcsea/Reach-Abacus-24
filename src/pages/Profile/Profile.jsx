import React, { useContext } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { TbHanger } from "react-icons/tb";
import { LoaderContext } from '../../context/LoaderContext';
import { Loader } from '../../components';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import devrloper from '../../assets/Hero/profile.png';

function Profile() {
    const { user, handleLogout } = useContext(AuthContext);
    console.log(user)
    const { isLoading } = useContext(LoaderContext);
    const navigate = useNavigate();

    if (isLoading) {
        return <Loader />;
    }

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
                            <span className="text-[#C778DD] font-light">Hello! </span>
                            <span className='text-white'>{user.name}</span>
                        </p>
                        <p className='text-gray-400'><span className='font-bold'>Abacus Id: </span>{user.abacusId}</p>
                    </div>
                    <div className='text-gray-300 text-base md:text-xl min-[900px]:text-2xl flex flex-col gap-3'>
                        <p className='flex'>
                            <span className='text-red-400 text-xl md:text-3xl'><FaLocationDot /></span>&nbsp;
                            {`Studying in ${user.college}. Striding through year ${user.year} in ${user.dept} department!`}
                        </p>
                        <p className='flex'>
                            <span className='text-red-400 text-xl md:text-3xl'><TbHanger /></span>&nbsp;
                            You are currently in {user.hostCollege}, attending our marvellous REACH'24!
                        </p>
                    </div>
                    <div className='w-full flex flex-col items-center gap-6'>
                        <div className='flex justify-center items-center gap-8 w-full'>
                            <button className='tracking-wider self-center w-fit border border-[#C778DD] px-4 py-2 text-white duration-150 hover:bg-[#C778DD33]'
                                onClick={() => navigate('/profile/update')}>
                                Update Profile {'<'}~{'>'}
                            </button>
                            <button className='tracking-wider self-center w-fit sm:w-[30%] border border-[#98dd78] hover:bg-[#98dd7836] px-4 py-2 text-white duration-150'
                                onClick={() => navigate('/dashboard')}>
                                Dashboard {'<'}~{'>'}
                            </button>
                        </div>
                        <div className='w-[50%]'>
                            <button className='tracking-wider self-center w-full border border-[#dd7878] hover:bg-[#dd787836] px-4 py-2 text-white duration-150'
                                onClick={() => handleLogout()}>
                                Logout {'<'}~{'>'}
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
                    <img src={devrloper} className='w-full sm:w-[70%] object-contain' />
                    <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF] w-full sm:w-3/4">
                        <div className="w-4 h-4 bg-[#C778DD]"></div>
                        <div className="">
                            #Email: <span className="text-white">{user.email}</span>
                        </div>
                    </div>
                    <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF] w-full sm:w-3/4">
                        <div className="w-4 h-4 bg-[#C778DD]"></div>
                        <div className="">
                            #Mobile: <span className="text-white">{user.mobile}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;