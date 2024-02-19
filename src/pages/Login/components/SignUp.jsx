import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { FaInfo } from 'react-icons/fa6';

function SignUp() {
    const { handleAbacusRegisterLink } = useContext(AuthContext)
    const [email, setEmail] = useState("");

    const handleEmailChange = (e) => setEmail(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAbacusRegisterLink({ email });
    }

    return (
        <>
            <div className='text-2xl text-center'>
                <span className='text-[#C778DD]'>&#60;</span>
                &nbsp;Sign up&nbsp;
                <span className='text-[#C778DD]'>&#62;</span>
            </div>
            <p className='text-base text-gray-300 text-center'>After registering your mail, a verification link will be sent to your email account.</p>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                <input type='email' name='email' placeholder='Email' value={email} className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                    style={{ width: '100%', backgroundColor: "#30343a" }} onChange={handleEmailChange} required />

                <div className="self-center">
                    <button type='submit' className="py-2 px-4 text-white border border-[#98dd78] hover:bg-[#98dd7836] duration-150">
                        Register {"<"}~{">"}
                    </button>
                </div>
            </form>
            <p className='flex justify-center text-sm items-center gap-2 text-white bg-gray-500 py-3 px-3 rounded-[30px]'>
                <span className='text-white bg-red-400 p-1 rounded-full'>
                    <FaInfo />
                </span>
                Please check the email entered if you didn't receive the registration link.
            </p>
        </>
    );
}

export default SignUp;