import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();

    return (
        <>
            <div className='text-2xl text-center'>
                <span className='text-[#C778DD]'>&#60;</span>
                &nbsp;Sign up&nbsp;
                <span className='text-[#C778DD]'>&#62;</span>
            </div>
            <p className='text-base text-gray-300 text-center'>After registering your mail, a verification link will be sent to your email account.</p>
            <form className='flex flex-col gap-5' action="#">
                <input type='email' name='email' placeholder='Email' className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                    style={{ width: '100%', backgroundColor: "#30343a" }} required />
                    
                <div className="self-center">
                    <button type='submit' className="py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150"
                    onClick={()=>navigate('/signup/details')}>
                        Register {"<"}~{">"}
                    </button>
                </div>
            </form>
        </>
    );
}

export default SignUp;