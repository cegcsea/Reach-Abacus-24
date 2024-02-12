import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignIn() {
    const { handleAbacusLogin } = useContext(AuthContext);
    const [isPassword, setIsPassword] = useState('password');
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAbacusLogin(formData);
    }

    return (
        <>
            <div className='text-2xl text-center'>
                <span className='text-[#C778DD]'>&#60;</span>
                &nbsp;Login&nbsp;
                <span className='text-[#C778DD]'>&#62;</span>
            </div>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                <input type='email' name='email' placeholder='Email' onChange={handleChange} value={formData.email}
                    className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                    style={{ width: '100%', backgroundColor: "#30343a" }} required />

                <div className='flex justify-center items-center border border-[#ABB2BF]'>
                    <input type={isPassword} name='password' placeholder='Password' onChange={handleChange} value={formData.password}
                        className='p-2 outline-none  text-[18px]'
                        style={{ width: '100%', backgroundColor: "#30343a" }} required />
                    {isPassword === 'password' && <span className='p-3 text-2xl bg-[#30343a] cursor-pointer' onClick={() => setIsPassword('text')}><FaEye /></span>}
                    {isPassword === 'text' && <span className='p-3 text-2xl bg-[#30343a] cursor-pointer' onClick={() => setIsPassword('password')}><FaEyeSlash /></span>}
                </div>

                <div className="self-center">
                    <button type='submit' className="py-2 px-4 text-white border border-[#98dd78] hover:bg-[#98dd7836] duration-150">
                        Login {"<"}~{">"}
                    </button>
                </div>
                <div className="self-center">
                    <p className='tracking-wider text-lg text-gray-400 font-light'>Forgot Password?&nbsp;
                        <Link to="/reset-password">
                            <span className='hover:text-[#C778DD] cursor-pointer transition-all font-semibold'>Click here!</span>
                        </Link>
                    </p>
                </div>
            </form>
        </>
    );
}

export default SignIn;