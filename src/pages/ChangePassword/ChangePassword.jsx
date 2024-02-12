import React, { useContext, useEffect, useState } from 'react';
import dots from '../../assets/Events/sidebg.png';
import { AuthContext } from '../../context/AuthContext';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function ChangePassword() {
    const { handleChangePassword } = useContext(AuthContext);
    const [isPassword, setIsPassword] = useState('password');
    const [isCPassword, setCIsPassword] = useState('password');
    const [formData, setFormData] = useState({ password: "", newPassword: "" });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleChangePassword(formData);
    }

    return (
        <div>
            <div className="flex justify-between items-center gap-5 md:px-0 px-5 py-10 bg-[#34363e] h-screen">
                {!isMobile && (
                    <div className="w-[30%] flex justify-center items-center">
                        <img src={dots} alt="dots-bg" />
                    </div>
                )}
                <div className="querybox flex flex-col gap-7 w-full md:w-2/5 border md:mt-7 border-[#ABB2BF] border-solid border-white-500 text-white p-5 md:p-10 bg-[#282C33]">
                    <div className='text-2xl text-center'>
                        <span className='text-[#C778DD]'>&#60;</span>
                        &nbsp;Change Password&nbsp;
                        <span className='text-[#C778DD]'>&#62;</span>
                    </div>
                    <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                        <div className='flex justify-center items-center border border-[#ABB2BF]'>
                            <input type={isPassword} name='password' placeholder='Password' onChange={handleChange} value={formData.password}
                                className='p-2 outline-none  text-[18px]'
                                style={{ width: '100%', backgroundColor: "#30343a" }} required />
                            {isPassword === 'password' && <span className='p-3 text-2xl bg-[#30343a] cursor-pointer' onClick={() => setIsPassword('text')}><FaEye /></span>}
                            {isPassword === 'text' && <span className='p-3 text-2xl bg-[#30343a] cursor-pointer' onClick={() => setIsPassword('password')}><FaEyeSlash /></span>}
                        </div>
                        <div className='flex justify-center items-center border border-[#ABB2BF]'>
                            <input type={isCPassword} name='newPassword' placeholder='New Password' onChange={handleChange} value={formData.newPassword}
                                className='p-2 outline-none  text-[18px]'
                                style={{ width: '100%', backgroundColor: "#30343a" }} required />
                            {isCPassword === 'password' && <span className='p-3 text-2xl bg-[#30343a] cursor-pointer' onClick={() => setCIsPassword('text')}><FaEye /></span>}
                            {isCPassword === 'text' && <span className='p-3 text-2xl bg-[#30343a] cursor-pointer' onClick={() => setCIsPassword('password')}><FaEyeSlash /></span>}
                        </div>

                        <div className="self-center">
                            <button type='submit' className="py-2 px-4 text-white border border-[#98dd78] hover:bg-[#98dd7836] duration-150">
                                Change {"<"}~{">"}
                            </button>
                        </div>
                    </form>
                </div>
                {!isMobile && (
                    <div className="w-[30%] flex justify-center items-center rotate-180">
                        <img src={dots} alt="dots-bg" />
                    </div>
                )}
            </div>

        </div>
    )
}

export default ChangePassword;