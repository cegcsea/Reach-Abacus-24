import React from 'react';
import Lottie from 'lottie-react';
import errorAnimation from '../../assets/Lottie/ErrorAnimation.json'
import { useNavigate } from 'react-router-dom';

function Error() {
    const navigate = useNavigate();

    return (
        <div className='bg-[#34363e] w-full flex flex-col justify-center items-center py-7 gap-4 px-2'>
            <h1 className='text-3xl sm:text-5xl font-semibold text-white'>
                Page
                <span className='text-red-400'>&nbsp;Not&nbsp;</span>
                Found!
            </h1>
            <div className='w-full sm:w-1/2'>
                <Lottie animationData={errorAnimation} />
            </div>
            <div>
                <button className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150"
                    onClick={() => navigate('/')}>
                    Revert Back! {"<"}~{">"}
                </button>
            </div>
        </div>
    )
}

export default Error;